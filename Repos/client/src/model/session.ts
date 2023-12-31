/* B"H
*/
import { reactive } from "vue";
import { useRouter } from "vue-router"
import { useToast } from "vue-toastification";
import * as myFetch from "./myFetch";
import { type User, getUserByEmail } from "./users";

const toaster= useToast();

const session = reactive({
  user: null as User | null,
  redirectUrl: null as string | null,
  messages: [] as {type: string, text: string}[],
  loading: 0
})

export function api(action: string, body?: unknown, method?: string){
  session.loading++;
  return myFetch.api(`${action}`)
    .catch(err=> showError(err))
    .finally(()=> session.loading--);
}

export function getSession(){
  return session;
}

export function showError(err: any){
  console.error(err);
  session.messages.push({ type: "error", text: err.message ?? err});
  toaster.error(err.message ?? err);
}

export function useLogin(){
  const router = useRouter();

  return {
    async login(email: string, password: string): Promise< User | null> {
      session.user = await api("users/login", {email, password});
      const user = await getUserByEmail(email)
      router.push(session.redirectUrl || "/");
      return session.user;
    },
    logout(){
      session.user = null;
      router.push("/login");
    }
  }
}