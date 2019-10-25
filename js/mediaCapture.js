/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var fileInfo = document.getElementById("fileinfo");

function onSuccess(mediaFiles) {
    var i, path, len;

    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
       path = mediaFiles[i].fullPath;
       fileInfo.innerHTML += path + '<br>';
    }
 }

function onError(error) {
    navigator.notification.alert('Error code: ' + error.code, null, error);
    // fileInfo += 'Error code: ' + error.code, null, 'Capture Error' + '<br>';
 }

function audioCapture() {

   var options = {
      limit: 1,
      duration: 10
   };

   navigator.device.capture.captureAudio(onSuccess, onError, options);
}

function imageCapture() {

   var options = {
      limit: 1
   };

   navigator.device.capture.captureImage(onSuccess, onError, options);
}

function videoCapture() {

   var options = {
      limit: 1,
      duration: 10
   };

   navigator.device.capture.captureVideo(onSuccess, onError, options);
}


var app = {
    // Application Constructor
    initialize: function() {
        document.getElementById("audioCapture").addEventListener("click", audioCapture);
        document.getElementById("imageCapture").addEventListener("click", imageCapture);
        document.getElementById("videoCapture").addEventListener("click", videoCapture);
    },
};

app.initialize();
