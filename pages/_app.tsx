import "../styles.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { type Session } from "next-auth";
import { type NextComponentType } from "next";

type CustomAppProps = AppProps<{ session: Session }> & {
  Component: NextComponentType & { auth?: boolean };
};

function Auth({ children }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return <></>;
  }

  return <>{children}</>;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;
