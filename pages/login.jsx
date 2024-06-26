import Head from "next/head";
import Image from "next/image";
import { auth, googleProvider, githubProvider } from "../firebase";

const Login = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).catch(alert);
  };

  const signInWithGithub = () => {
    auth.signInWithPopup(githubProvider).catch(alert);
  };

  return (
    <section className="container grid mx-auto place-items-center mt-10">
      <Head>
        <title>Login | Whatsapp Clone</title>
        <link rel="icon" href="/WhatsApp_Logo.webp" />
      </Head>

      <div className="login-container flex flex-col">
        <Image
          src="/WhatsApp_Logo.webp"
          alt="Whatsapp Logo"
          className="login-container__logo"
          width={200}
          height={200}
        />
        <button
          onClick={signInWithGoogle}
          className="btn btn-primary mt-5 login__container__button"
        >
          Login with Google
        </button>
        <button
          onClick={signInWithGithub}
          className="btn mt-5 login__container__button"
        >
          Login with GitHub
        </button>
      </div>
      <div className="updates-and-acknowledgement grid justify-center w-full max-w-sm">
        <div className="border-t-2 border-gray-300 dark:border-gray-700 my-5"></div>
        <p className="text-lg font-medium font-poppins text-center">
          Updates & Acknowledgements
        </p>
        <ul className="list-disc text-gray-600 dark:text-gray-300">
          <li>
            This is <strong>not</strong> WhatsApp. It is a clone made by me -{" "}
            <a
              href="https://tanishanand2409.web.app"
              className="link link-primary dark:link-secondary link-hover"
              target="_blank"
            >
              @tanish
            </a>
            .
          </li>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 my-2"></div>
          <li>
            I suggest you not to use it for official purposes as it is very
            wacky and messages are <strong>not</strong> encrypted by default.
          </li>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 my-2"></div>
          <li>This app is not affiliated/linked with WhatsApp in any way.</li>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 my-2"></div>{" "}
          <li>
            It is just a slightly scuffed version of the original WhatsApp (its
            far from being called a perfect clone), however feel free to test
            the features and enjoy :)
          </li>
          <div className="border-t-2 border-gray-300 dark:border-gray-700 my-2"></div>{" "}
         
          <div className="border-t-2 border-gray-300 dark:border-gray-700 my-2"></div>{" "}
          
        </ul>
      </div>
      <p className="fixed bottom-0 left-0 m-1">
        &copy; {new Date().getFullYear()} - Aktindo Inc. | v0.0.1-alpha
      </p>
    </section>
  );
};

export default Login;
