import React from 'react';
import { QlikEmbed, QlikEmbedConfig } from "@qlik/embed-react";

const hostConfig = {
    host: "https://6trob6wls183bhw.ap.qlikcloud.com",
    clientId: "eb5bd9f2b0d0ed28d36cd871e2f53107",
    redirectUri: "http://localhost:3000/oauth-callback.html",
    accessTokenStorage: "session",
    authType: "oauth2",
};
const appId = "d5ab1872-c2a7-4c50-9747-b6771bf863d0";
const sheetId = "d6867971-8f96-4911-9184-7c14f70b716e"; // sheet id or empty string

const Test = () => {
  // @ts-ignore
    return(
      <QlikEmbedConfig.Provider value={hostConfig as any}>
          <div className="container">
              <h1>Qlik Embed with React</h1>
              {/*<div className="selections-bar">*/}
              {/*    <QlikEmbed ui="analytics/selections" appId={appId} />*/}
              {/*</div>*/}
              <div className="viz">
                  <QlikEmbed ui="classic/app" app={appId} sheet={sheetId} />
              </div>
              {/*<div className="viz">*/}
              {/*    <QlikEmbed ui="analytics/chart" appId={appId} objectId="hRZaKk" />*/}
              {/*</div>*/}
          </div>
      </QlikEmbedConfig.Provider>
  )
}

export default Test;
