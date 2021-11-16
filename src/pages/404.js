import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";


const NotFoundPage = () => {
  return (
    <Layout>
      <main className="error-page">
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
