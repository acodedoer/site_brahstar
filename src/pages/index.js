import React from "react"
import { Link } from "gatsby"
import ImageMain from '../components/imagemain'
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import SEO from "../components/seo"
import TabCard from '../components/card'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Grid  alignItems="center" justify="center" container  style={{ paddingTop:'3em',paddingBottom:'3em'}}>
      <Grid alignItems="center" style={{textAlign:'left'}} item sm={6}>
        <h4>BrahStar Media and Communication Services provides lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula ipsum. Nulla facilisi.</h4>
      </Grid>
      <Grid item sm={6}>
        <ImageMain/>
      </Grid>
    </Grid>
    
    <Grid container spacing={3}>
      <Grid item md={3}>
        <Link  style={{ textDecoration: 'none', color:'black' }}  to="/services/">
          <TabCard title="Our Services" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula ipsum. Nulla facilisi. Mauris quis ipsum nisi."/>
        </Link>
      </Grid>

      <Grid item md={3}>
        <Link  style={{ textDecoration: 'none', color:'black' }}  to="/clients/">
          <TabCard title="Our Clients" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula ipsum. Nulla facilisi. Mauris quis ipsum nisi."/>
        </Link>
      </Grid>

      <Grid item md={3}>
        <Link  style={{ textDecoration: 'none', color:'black' }}  to="/about/">
          <TabCard title="About Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula ipsum. Nulla facilisi. Mauris quis ipsum nisi."/>
        </Link>
      </Grid>

      <Grid item md={3}>
        <Link  style={{ textDecoration: 'none', color:'black' }}  to="/contact/">
          <TabCard title="Contact Us" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vehicula ipsum. Nulla facilisi. Mauris quis ipsum nisi."/>
        </Link>
      </Grid>
     </Grid>
  </Layout>
)

export default IndexPage
