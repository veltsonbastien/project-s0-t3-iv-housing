import React, { useState, useEffect } from 'react';
import ListingForm from '../components/forms/listingForm'
import Layout, {siteTitle} from '../components/layout.js'
import Info from '../components/info.jsx'
import utilStyles from '../styles/utils.module.css'  // css style
import { optionalAuth } from "../utils/ssr";

export const getServerSideProps = optionalAuth;

export default function Create(props){
  const user=props.user
  const [{company,address,size,totalPrice,pricePerPerson, website, phone}, setInfo] = useState(
		{ company: '', address: '', size: '', totalPrice: '', pricePerPerson: '', website: '', phone:'' }
	);
  const getFormInfo = (address, size,totalPrice,pricePerPerson, website, phone)=>{ setInfo(address, size,totalPrice,pricePerPerson, website, phone);}

  return (
  <div>
    <Layout create user={user}></Layout>
      <ListingForm getFormInfo={getFormInfo}/>
      <div className={utilStyles.mapInfo}>
					<Info/>
			</div>
  </div>
  );
}