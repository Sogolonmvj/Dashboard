import React, { useState, useEffect } from 'react';
import Block from 'components/Block';
import { doGetRequest } from 'helpers/apiHelper';
import { bitcoinProcessor, currencyProcessor, bovespaProcessor, googleTrendsProcessor, twitterTrendsProcessor } from 'helpers/processorHelper';

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        doGetRequest('/dashboard').then(({ data }) => setData(data));
    }, []);
   
    if (data) {
        return (
            <div className="home">
                <div className="blocks">
                <Block data={data.googletrends} label="Google Trends" processor={googleTrendsProcessor}/>
                <Block data={data.twitter} label="Twitter Top Trends" processor={twitterTrendsProcessor}/>
                <Block data={data.bovespa} label="Bovespa" processor={bovespaProcessor}/>
                <Block data={data.bitcoin} label="Bitcoin" processor={bitcoinProcessor}/>
                <Block data={data.currency} label="Currency" processor={currencyProcessor}/>
                </div>
            </div>
        );
    }

    return <h1>No data to display</h1>;
};

export default Home;