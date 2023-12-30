import React from 'react';
import Layout from '../../components/Layout';
import {portfolio} from "../../styles/projects.module.css"
const Index = () => {
    return (
        <Layout>
        <div className={portfolio}>
            <h1>Project Files</h1>
            <h2>Project & Website I have Created !</h2>
        </div>
        </Layout>
    );
}

export default Index;
