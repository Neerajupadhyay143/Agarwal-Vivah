import React, { useState } from 'react';
import "./MyPhotos.css";

function MyPhotos() {

 const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const newSelectedPhotos = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      // Ensure the file is an image and satisfies the size and format constraints
      if (
        selectedFiles[i].type.includes('image/') &&
        selectedFiles[i].size <= 15 * 1024 * 1024 &&
        ['jpg', 'jpeg', 'png', 'webp'].includes(selectedFiles[i].name.split('.').pop().toLowerCase())
      ) {
        newSelectedPhotos.push(selectedFiles[i]);
      }
    }

    // Update the state with the new selected photos
    setSelectedPhotos(newSelectedPhotos);
  };

  return (
  <>
    <div className="container">
      <div className="my-photop">
        <h5>My photos</h5>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              data-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Photos Album
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div className="up-my-photo">
              <div className="click-upphoto">
                <h5>Upload photos from your computer</h5>
                <input type="file" id="real-file" hidden="hidden" onChange={handleFileChange} multiple />
                <label htmlFor="real-file">
                  <button type="button" id="custom-button">
                    Browse Photo
                  </button>
                </label>
              </div>
              <p>
                Note: You can upload 20 photos to your profile. Each photo must be less than 15 MB and in jpg, jpeg,
                png, or webp format. All photos uploaded are screened as per{' '}
                <span>
                  <a href="#">Photo Guidelines</a>
                </span>{' '}
                and 98% of those get activated within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default MyPhotos