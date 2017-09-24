var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "living-room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5215354565513763,
        "pitch": 0.1527428103276698,
        "fov": 0.9288571075708562
      },
      "linkHotspots": [
        {
          "yaw": 2.091488619141595,
          "pitch": 0.2516969611286317,
          "rotation": 0,
          "target": "1-kor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kor",
      "name": "kor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02887425804689947,
          "pitch": 0.2956722637828193,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
