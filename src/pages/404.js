import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";


const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="R³ - 404: Not Found" />
      <main className="error-page main">

        <section>
          <h1>404</h1>
          <p>
            Oops. Looks like that page doesn't exist.
            <br />
            <Link to="/">Go home</Link>
          </p>
        </section>
      </main>
    </Layout>
  )
}

export default NotFoundPage
