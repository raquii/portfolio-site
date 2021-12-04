import * as React from "react";
import { Link } from "gatsby";
import "@fontsource/poppins";
import "@fontsource/montserrat";

import Layout from "../components/Layout";
import Head from "../components/Head";


const IndexPage = () => {

  return (
    <Layout>
      <Head title="R³ - Home" />
      <main className="main home-pg">

        <h1 className="home-header">
          Hello, I'm <span className="name-span">Raquel</span>.
        </h1>

        <h2 className="home-text">
          I'm a full-stack software developer.
        </h2>

        <Link to="/projects" className="btn projects-btn">
          See My Projects
        </Link>

      </main>
    </Layout>
  );
};

export default IndexPage;
