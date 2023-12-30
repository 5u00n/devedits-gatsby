import * as React from "react"

import Layout from "../components/Layout"

import {header, btn} from "../styles/home.module.css"

import {Link, graphql} from 'gatsby'

export default function Home({data}) {
  console.log(data);
  const {title, description}= data.site.siteMetadata;
  return(
  <Layout>
    <section className={header}>
      <div >
        <h2 >Desigin</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & Web Developer based in India.</p>
        <Link className={btn} to="/projects">My Portfolio Project </Link>
      </div>
      <img src="/cc.png" alt="site banner"/>
      <p>{title} - {description}</p>
    </section>
  </Layout>
  );
}

export const query= graphql`
query SiteInfo {
  site(siteMetadata: {}) {
    siteMetadata {
      description
      title
    }
  }
}`