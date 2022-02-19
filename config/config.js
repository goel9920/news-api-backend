const config = {
  jwtSecret: "thisisnewsapi",
  databaseUrl: "mongodb://localhost:27017/newsapi",
  GOOGLE_CLIENT_ID: "836872238427-tj6582bo1mbjqhkqo7ei80gfl72u7k5o.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "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",
  GOOGLE_REFRESH_TOKEN: "1//04229xWcQCf0uCgYIARAAGAQSNwF-L9IrQnAA1N03-QHp27769mgpFWogRO9amb1XDot5loLok1a7j1-SPl3hvljLLuihlpyNOJc",
  GOOGLE_REDIRECT_URI: "https://developers.google.com/oauthplayground",
  DRIVE_FOLDER_ID: "1GnK1LGPMa0TENFBvyMFYGrt_dNjiYgsZ"
};

export const get=(key)=>{
  return config[key];
}

export default config;
