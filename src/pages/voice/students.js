import React from 'react';
import Layout from '../../components/Layout';
import Head from '../../components/Head';

function students() {

    return (
        <Layout>
            <Head title="R³ - Student Portal" />
            <main className="main">
                <h1 className="pg-header">Student Portal</h1>
                <section>
                    <iframe
                        id="sb_login_if"
                        src="https://app.mymusicstaff.com/Widget/v2/Login.aspx?Sandboxed=true"
                        allowtransparency="true"
                        frameborder="0"
                        style={{ width: "100%", overflow: "hidden", height: "400px" }}
                        height="600px"
                        scrolling="no"
                        title="student-portal"
                    ></iframe>
                </section>
            </main>
        </Layout>
    )
}

export default students;
