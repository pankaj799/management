import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, Upload, Card } from 'antd';
import styled from 'styled-components';
import { gapi } from 'gapi-script';
import GoogleDriveImage from '../../images/google-drive.png';
import { style } from './styles';
import { InboxOutlined } from '@ant-design/icons';
import folderImg from '../../images/Icon ionic-ios-folder-open@2x.png'
import dotsImg from '../../images/Group 32981@2x.png'
import imageImg from '../../images/photo@2x.png'
import { driveFileUpload } from "../../actions/auth"

import { useDispatch } from "react-redux"
import placeholderImg from '../../images/profile-icon-png-898.png'
import toast from "../../component/common/toast"



const NewDocumentWrapper = styled.div`
  ${style}
`;

// Client ID and API key from the Developer Console
// const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
// const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;
const CLIENT_ID = "577341486066-itu4o8bisuafp9va6ig70b1bmokpci4o.apps.googleusercontent.com";
const API_KEY = "AIzaSyD6Ls8Ax6S6qDxJigRG39aIrgXSdik_710";


// Array of API discovery doc URLs for APIs
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
// const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
const SCOPES = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.photos.readonly';
// const SCOPES = 'https://www.googleapis.com/auth/calendar';

const SelectSource = () => {
  const [listDocumentsVisible, setListDocumentsVisibility] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [driveFileList, setDriveFileList] = useState([]);
  const [driveFolderList, setDriveFolderList] = useState([]);
  const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
  const [isFetchingGoogleDriveFiles, setIsFetchingGoogleDriveFiles] = useState(false);
  const [signedInUser, setSignedInUser] = useState(null);
  

  const handleChange = (file) => { };

  const [drive_parent_obj,setDriveParentObj] = useState(null)


  const setDriveParentIdData = (driveParentObj) =>{

    setDriveParentObj(driveParentObj);
    
    if(driveParentObj != null){
      folderListFiles(driveParentObj.id);
    }else{
      listFiles();
    }
  }

  const setDriveParentArrData = (driveParentObj) =>{
    setDriveParentObj(null);    
    // if(driveParentObj != null){
    //   folderListFiles(driveParentObj.parents[0]);
    // }else{
    // }
    listFiles();
  }


  /**
   * Print files.
  */
  const listFiles = (searchTerm = null) => {

    setIsFetchingGoogleDriveFiles(true);

    gapi.client.drive.files
      .list({
        // pageSize: 30,  
        fields: 'nextPageToken, files(*)',
        q: "'root' in parents",
        trashed:false,
      })
      .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);
        
        let folders = res.files.filter(data => data.mimeType == "application/vnd.google-apps.folder")
        let files = res.files.filter(data => data.mimeType != "application/vnd.google-apps.folder")
        folders = folders.filter(data => data.trashed == false)
        files = files.filter(data => data.trashed == false)

        setDriveFolderList(folders);
        setDriveFileList(files);
        

        setDocuments(res.files);
      });
      
  };

  const folderListFiles = (driveParentId) => {

    setIsFetchingGoogleDriveFiles(true);
    gapi.client.drive.files
      .list({
        // pageSize: 30,  
        fields: 'nextPageToken, files(*)',
        q:`'${driveParentId}' in parents `,
      })
      .then(function (response) {
        setIsFetchingGoogleDriveFiles(false);
        setListDocumentsVisibility(true);
        const res = JSON.parse(response.body);

        let folders = res.files.filter(data => data.mimeType == "application/vnd.google-apps.folder")
        let files = res.files.filter(data => data.mimeType != "application/vnd.google-apps.folder")
        folders = folders.filter(data => data.trashed == false)
        files = files.filter(data => data.trashed == false)

        setDriveFolderList(folders);
        setDriveFileList(files);


        setDocuments(res.files);
      });
      
  };

 

  /**
   *  Sign in the user upon button click.
   */
  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };

  /**
   *  Called when the signed in status changes, to update the UI
   *  appropriately. After a sign-in, the API is called.
   */
  const updateSigninStatus = (isSignedIn) => {

    if (isSignedIn) {
      // Set the signed in user
      setSignedInUser(gapi.auth2.getAuthInstance().currentUser.yb);
      setIsLoadingGoogleDriveApi(false);
      // list files if user is authenticated
      listFiles();
    } else {
      // prompt user to sign in
      handleAuthClick();
    }
  };

  /**
   *  Sign out the user upon button click.
   */
  const handleSignOutClick = (event) => {
    setListDocumentsVisibility(false);
    gapi.auth2.getAuthInstance().disconnect();
    setSignedInUser(null);
  };

  /**
   *  Initializes the API client library and sets up sign-in state
   *  listeners.
   */
  const initClient = () => {
    setIsLoadingGoogleDriveApi(true);
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        },
        function (error) { }
      );
  };

  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  };
  // ---------------------File module------------------------------------
  const dispatch = useDispatch();

  const handleItemFile = (e) => {
      let bodyData = {
        file:e.target.files,
      }
      const successCb = (resp) => {
        toast.success(resp.message);
      }
      const failureCb = (resp) => {
          toast.error(resp.message);
      }
      dispatch(driveFileUpload(bodyData,successCb, failureCb));
  }

  const onReadFile = (fileDetailObj) =>{
    // webViewLink webContentLink
    console.log("fileDetailObj : ",fileDetailObj);

    window.open(fileDetailObj.webViewLink, '_blank');
  }

  return (
    <NewDocumentWrapper>
      {(signedInUser == null) ?

        <>

          <div className='row justify-content-center'>
            <div className='col-md-4 align-center mt-5'>
              <Card className='mt-5'>
                <Spin spinning={isLoadingGoogleDriveApi} style={{ width: '100%' }}>
                  <div onClick={() => handleClientLoad()} className="source-container">
                    <div className='d-flex flex-wrap justify-content-center'>
                      <div className=''>
                        <div className="icon-container">
                          <div className="icon icon-success">
                            <img height="80" width="80" src={GoogleDriveImage} />
                          </div>
                        </div>
                      </div>
                      <div className=''>
                        <div className="content-container text-center">
                          <p className="title"><strong>Google Drive</strong></p>
                          <span className="content">Import documents straight from your google drive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Spin>
              </Card>
            </div>
          </div>
        </>
        : ""}


      {(signedInUser != null) ?

        <div className={signedInUser == null ? " hideSection " : ""}>

          <div className='row mt-3 text-end'>
            <div className='col-md-11 mt-3 text-end'>
              <button onClick={handleSignOutClick} className="btn authBtnColor rounded-pill ps-3 pe-3">Gmail Logout</button>
            </div>
          </div>

          <div className='col-md-12 d-flex p-5'>
            <div className='d-flex flex-column justify-content-start align-items-center' style={{ width: '50%', marginRight: '2rem' }}>
              <div className="d-flex mb-4" style={{ width: '100%', boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px` }}>
                
              </div>
              <div style={{width: '100%'}}>

                <div className="d-flex flex-column justify-content-center align-items-center text-center mb-5">
                  <div className="col-md-12 form-group card" style={{position: 'relative',height:"200px",width:"100%"}}>
                      <input type="file" style={{ height:"100%",width: "100%", position: 'absolute', opacity: 0, left :'0' }}
                        onChange={(e) => handleItemFile(e)} />
                      <div>
                        <p style={{marginTop:"19%"}}>Click or drag file to this area to upload</p>
                          {/* <img src={placeholderImg} className="img-thumbnail" /> */}
                      </div>
                  </div>
                </div>


              </div>
              <div style={{ width: "100%", }}>
                {console.log("drive_parent_obj : ",drive_parent_obj)}
                <h4 className='mt-4' style={{ fontWeight: '600' }}>My Folders <small className='driveBackPath' onClick={() =>  setDriveParentArrData(drive_parent_obj) } style={{fontSize:"16px"}}> {drive_parent_obj != null ? "< Back" : ""}</small></h4>
                <div className='d-flex flex-wrap' style={{ boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`, borderRadius: '1rem' }}>


                  <div className='row w-100 mb-3' style={{maxHeight:"40rem",overflowY:'auto'}}>
                    { 
                      driveFolderList.length > 0 ? driveFolderList.map((documentObj,i) => {
                          return(
                            <div onClick={() => setDriveParentIdData(documentObj)} key={i} className='col-md-4 text-center p-4' style={{cursor:"pointer"}}>
                              <img src={folderImg} style={{ width: '60px', height: '60px' }} />
                              <p className="driveFolderName">{documentObj?.name}</p>
                            </div> 
                          )
                      }): 
                      <div className='col-md-12 text-center p-4'>
                        <p style={{fontSize:"12px"}}>Empty Folder List</p>
                      </div> 
                    }
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-start align-items-center' style={{ width: '50%', height: '100%' }}>
              <div style={{ width: "100%", height: '100%' }}>
                <h4 className='' style={{ fontWeight: '600' }}>Recent Files</h4>
                <div className='flex-wrap'>

                  <div className='row' style={{ maxHeight: '60rem', overflowY: 'auto' }}>
                    { 
                    driveFileList.length > 0 ? driveFileList.map((documentObj,i) => {
                      { 

                          return(
                            <div onClick={()=> onReadFile(documentObj)} className='col-md-12 justify-content-between align-items-center mb-4' key={i} >

                                <div className='row p-2' style={{background: '#528CAB', borderRadius: '10px', padding: '10px 10px', boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px` }}>
                                  <div className='col-md-2' style={{ background: '#AF8DFF', width: '40px', height: '40px', borderRadius: '10px' }}>
                                    <img src={imageImg} style={{ width: "20px", height: '20px',marginTop:"8px" }} />
                                  </div>
                                  <div className='col-md-9'>
                                      <p className='mb-0 driveFileName'>{documentObj?.name}</p>
                                  </div>
                                </div>
                            </div>
                          )
                        
                      }

                      }): 

                      <div class="col-md-12 text-center p-4 card pb-5" style={{height:"30px"}}>
                        <p style={{fontSize:"12px"}}>Empty File List</p>
                      </div> 

                    }
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        : ""
      }





    </NewDocumentWrapper>
  );
};

export default SelectSource;
