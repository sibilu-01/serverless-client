const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-sib",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://2ovmur4heg.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_6QS3zvR9R",
      APP_CLIENT_ID: "1nddbltfk1laco4t7cun2d2ucr",
      IDENTITY_POOL_ID: "us-east-1:88bc4622-bc51-49c7-b8da-539a75daec51",
    },
  };
  
  export default config;