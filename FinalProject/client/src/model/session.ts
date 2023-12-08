import { reactive } from "vue";
import { useRouter } from "vue-router"
import { useToast } from "vue-toastification";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import * as myFetch from "./myFetch";
import { type User, getUserByEmail } from "./users";

const toast = useToast();

const session = reactive ({
    user: null as User | null,
    token: null as string | null,
    isLoading: false,
    redirectUrl: null as string | null,
    messages: [] as {
        type: string,
        text: string
    }[]
})
export function createUser(user: User): Promise<DataEnvelope<User>> {
  return api('/users/', user, 'POST')
}

export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;
  
    if(session.user?.token)
    {headers = {
        "Authorization": `Bearer ${session.user?.token}`,
        ...headers,
    }
  }
    return myFetch.api(url, data, method, headers)
    .catch(err=> showError(err))
        .finally(() => {
            session.isLoading = false;
        })
}

export function getSession(){
    return session;
}

export function showError(err: any) {
    debugger;
    console.error(err);
    session.messages.push({
      type: "error",
      text: err.message ?? err
    });
    toast.error( err.message ?? err);
}

export async function loginWithServer(email: string, password: string): Promise<User | null> {
    try {
      const response = await api('/users/login', {email, password}, 'POST');
      session.user = response.data.user;
  
      if(session.user) {
        session.user.token = response.data.token;
        return session.user;
      } else {
        toast.error("Login unsuccessful");
        return null;
      }
    } catch (err) {
      showError(err);
      return null;
    }
}

export function useLogin(){
    const router = useRouter();
  
    return {
      async login(email: string, password: string): Promise< User | null> {
        const response = await api("users/login", { email, password });
  
        session.user = response.user;
        session.token = response.token;
  
        router.push(session.redirectUrl || "/");
        return session.user;
      },
      logout(){
        session.user = null;
        router.push("/login");
      }
    }
}
export function useSession() {
    return session;
}

export function loginWithUser(user: User) {
    session.user = user;
}