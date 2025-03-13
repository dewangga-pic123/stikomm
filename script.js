TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "hfovMin": 111,
  "id": "panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
  "adjacentPanoramas": [
   {
    "yaw": 3.6,
    "backwardYaw": 160.56,
    "distance": 1,
    "panorama": {
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
     "adjacentPanoramas": [
      {
       "yaw": -144.85,
       "backwardYaw": -110.4,
       "distance": 1,
       "panorama": {
        "vfov": 180,
        "hfovMin": 60,
        "id": "panorama_109B0239_1938_2B56_41B0_AB329B348192",
        "adjacentPanoramas": [
         {
          "yaw": -110.4,
          "backwardYaw": -144.85,
          "distance": 1,
          "panorama": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
          "class": "AdjacentPanorama"
         },
         {
          "yaw": 104.09,
          "backwardYaw": 77.46,
          "distance": 1,
          "panorama": {
           "vfov": 180,
           "hfovMin": 60,
           "id": "panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
           "adjacentPanoramas": [
            {
             "yaw": 77.46,
             "backwardYaw": 104.09,
             "distance": 1,
             "panorama": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "hfov": 360,
           "hfovMax": 120,
           "thumbnailUrl": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_t.jpg",
           "label": "Ruang Keuangan",
           "partial": false,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3040,
                "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_hq.jpeg",
                "width": 6080,
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -17.05,
                 "yaw": 77.46,
                 "hfov": 9.84,
                 "image": {
                  "levels": [
                   {
                    "height": 175,
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_0_0.png",
                    "width": 173,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_08C1B044_19C8_273E_41B0_5A0B97FB02A0",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_109B0239_1938_2B56_41B0_AB329B348192, this.camera_9976460B_8DE0_A75F_41CF_E20A3A87B10D); this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 87,
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_0_0_0_map.gif",
                    "width": 86,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 77.46,
                 "pitch": -17.05,
                 "hfov": 9.84,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": 19.9,
                 "yaw": 0.7,
                 "hfov": 10.94,
                 "image": {
                  "levels": [
                   {
                    "height": 193,
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_1_0.png",
                    "width": 196,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_464A5472_4AD1_5398_41D1_869BD9B7E153",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 96,
                    "url": "media/panorama_10997093_1938_E75A_4174_6DF3A6A75EED_0_HS_1_0_0_map.gif",
                    "width": 98,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 0.7,
                 "pitch": 19.9,
                 "hfov": 10.94,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          },
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "pitch": 0,
        "hfov": 360,
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_t.jpg",
        "label": "Lift Lantai 1",
        "partial": false,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3040,
             "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_hq.jpeg",
             "width": 6080,
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -7.71,
              "yaw": 104.09,
              "hfov": 10.2,
              "image": {
               "levels": [
                {
                 "height": 175,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_0_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_090A318B_1938_694A_41B5_DA60F999EF6D",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED, this.camera_9996F5C4_8DE0_A4C9_41D7_441695DE6D6F); this.mainPlayList.set('selectedIndex', 3)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 87,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_0_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 104.09,
              "pitch": -7.71,
              "hfov": 10.2,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -5.86,
              "yaw": -110.4,
              "hfov": 10.24,
              "image": {
               "levels": [
                {
                 "height": 175,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_1_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_096E7B75_1938_19DE_41A4_AE96A7D1AC5E",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_998195AD_8DE0_A55B_41D4_A46E31A1EDA3); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 87,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_1_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -110.4,
              "pitch": -5.86,
              "hfov": 10.24,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": 14.29,
              "yaw": 24.74,
              "hfov": 9.98,
              "image": {
               "levels": [
                {
                 "height": 173,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_2_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_09317E14_1938_3B5E_41B3_C2BED932E89C",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 11)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 86,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_2_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 24.74,
              "pitch": 14.29,
              "hfov": 9.98,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": 20.7,
              "yaw": 8.68,
              "hfov": 9.63,
              "image": {
               "levels": [
                {
                 "height": 175,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_4_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_55AA3AAE_4683_1ECB_41C2_A1789FD38313",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.showPopupPanoramaOverlay(this.popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':2,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':2,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':2,'backgroundOpacity':0.3,'paddingRight':30,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}, this.ImageResource_54C5AA0C_4683_39CE_41CF_2A26B5A16BF5, null, null, null, null, false)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 87,
                 "url": "media/panorama_109B0239_1938_2B56_41B0_AB329B348192_0_HS_4_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 8.68,
              "pitch": 20.7,
              "hfov": 9.63,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "hideEasing": "cubic_out",
            "rotationY": 0,
            "pitch": 20.7,
            "hfov": 9.63,
            "rotationZ": 0,
            "yaw": 8.68,
            "popupMaxWidth": "95%",
            "hideDuration": 500,
            "image": {
             "levels": [
              {
               "height": 723,
               "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_2.png",
               "width": 1024,
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "popupMaxHeight": "95%",
            "class": "PopupPanoramaOverlay",
            "showEasing": "cubic_in",
            "id": "popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD",
            "showDuration": 500,
            "rotationX": 0
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       },
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -22.85,
       "backwardYaw": -43.62,
       "distance": 1,
       "panorama": {
        "vfov": 180,
        "hfovMin": 60,
        "id": "panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
        "adjacentPanoramas": [
         {
          "yaw": -164.44,
          "backwardYaw": -84.53,
          "distance": 1,
          "panorama": {
           "vfov": 180,
           "hfovMin": 60,
           "id": "panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
           "adjacentPanoramas": [
            {
             "yaw": -84.53,
             "backwardYaw": -164.44,
             "distance": 1,
             "panorama": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
             "class": "AdjacentPanorama"
            },
            {
             "yaw": 154.24,
             "backwardYaw": 80.25,
             "distance": 1,
             "panorama": {
              "vfov": 180,
              "hfovMin": 60,
              "id": "panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
              "adjacentPanoramas": [
               {
                "yaw": -143.32,
                "backwardYaw": 81.83,
                "distance": 1,
                "panorama": {
                 "vfov": 180,
                 "hfovMin": 60,
                 "id": "panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
                 "adjacentPanoramas": [
                  {
                   "yaw": 81.83,
                   "backwardYaw": -143.32,
                   "distance": 1,
                   "panorama": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMax": 120,
                 "thumbnailUrl": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_t.jpg",
                 "label": "Langkah Menuju Toilet Dan Musholla di Lantai 2",
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 3040,
                      "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_hq.jpeg",
                      "width": 6080,
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7.jpeg",
                      "width": 3217,
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -18.51,
                       "yaw": 81.83,
                       "hfov": 10.63,
                       "image": {
                        "levels": [
                         {
                          "height": 178,
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_0_0.png",
                          "width": 189,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_0E16A98F_1A0B_35B5_41B3_1739BEE3A270",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_996DE5DC_8DE0_A4F9_41DE_BF68F9B41A3D); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 89,
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_0_0_0_map.gif",
                          "width": 94,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 81.83,
                       "pitch": -18.51,
                       "hfov": 10.63,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": -27.3,
                       "yaw": -94.64,
                       "hfov": 9.23,
                       "image": {
                        "levels": [
                         {
                          "height": 173,
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_1_0.png",
                          "width": 175,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_0EF01AC2_1A0B_77AF_418B_A210FAEF1D86",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 21)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 86,
                          "url": "media/panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_0_HS_1_0_0_map.gif",
                          "width": 87,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -94.64,
                       "pitch": -27.3,
                       "hfov": 9.23,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "enabledInCardboard": true
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                },
                "class": "AdjacentPanorama"
               },
               {
                "yaw": -32.84,
                "backwardYaw": 144.45,
                "distance": 1,
                "panorama": {
                 "vfov": 180,
                 "hfovMin": 60,
                 "id": "panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
                 "adjacentPanoramas": [
                  {
                   "yaw": 144.45,
                   "backwardYaw": -32.84,
                   "distance": 1,
                   "panorama": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMax": 120,
                 "thumbnailUrl": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_t.jpg",
                 "label": "Perpustakaan",
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 3040,
                      "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_hq.jpeg",
                      "width": 6080,
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D.jpeg",
                      "width": 3217,
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": 5.78,
                       "yaw": 144.45,
                       "hfov": 10.24,
                       "image": {
                        "levels": [
                         {
                          "height": 173,
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_0_0.png",
                          "width": 173,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_08BD9579_1A19_3D5C_4175_3F6457F585C7",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_9D9557C5_8DE0_A4CB_41DF_44697350DFF8); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 86,
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_0_0_0_map.gif",
                          "width": 86,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 144.45,
                       "pitch": 5.78,
                       "hfov": 10.24,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": 12.06,
                       "yaw": 57.64,
                       "hfov": 7.65,
                       "image": {
                        "levels": [
                         {
                          "height": 132,
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_1_0.png",
                          "width": 132,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_37AD1A23_3B2F_CF04_41C0_86EB0A95005E",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 66,
                          "url": "media/panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_0_HS_1_0_0_map.gif",
                          "width": 66,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 57.64,
                       "pitch": 12.06,
                       "hfov": 7.65,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "enabledInCardboard": true
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                },
                "class": "AdjacentPanorama"
               },
               {
                "yaw": 80.25,
                "backwardYaw": 154.24,
                "distance": 1,
                "panorama": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
                "class": "AdjacentPanorama"
               },
               {
                "yaw": 9.09,
                "backwardYaw": -140.12,
                "distance": 1,
                "panorama": {
                 "vfov": 180,
                 "hfovMin": 60,
                 "id": "panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
                 "adjacentPanoramas": [
                  {
                   "yaw": -140.12,
                   "backwardYaw": 9.09,
                   "distance": 1,
                   "panorama": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "class": "Panorama",
                 "pitch": 0,
                 "hfov": 360,
                 "hfovMax": 120,
                 "thumbnailUrl": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_t.jpg",
                 "label": "Ruangan Lab.Mobile Technology",
                 "partial": false,
                 "frames": [
                  {
                   "sphere": {
                    "levels": [
                     {
                      "height": 3040,
                      "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_hq.jpeg",
                      "width": 6080,
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247.jpeg",
                      "width": 3217,
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_t.jpg",
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": 10.04,
                       "yaw": -140.12,
                       "hfov": 10.14,
                       "image": {
                        "levels": [
                         {
                          "height": 173,
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_0_0.png",
                          "width": 173,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_088E947D_1A19_7355_41A5_8CB00BC121D4",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_99D4D52E_8DE0_A559_41DF_2E3CB0300BFE); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 86,
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_0_0_0_map.gif",
                          "width": 86,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -140.12,
                       "pitch": 10.04,
                       "hfov": 10.14,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "data": {
                      "label": "Image"
                     },
                     "items": [
                      {
                       "pitch": 4.14,
                       "yaw": 7.44,
                       "hfov": 7.03,
                       "image": {
                        "levels": [
                         {
                          "height": 118,
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_1_0.png",
                          "width": 118,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage"
                      }
                     ],
                     "useHandCursor": true,
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_37ED646A_3B3B_5B04_41C0_A1EC41A65DEA",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "Lab Mobile Technology\u000a\u000a1. 21 unit komputer untuk mahasiswa dalam praktikum dan pengembangan aplikasi mobile.  \u000a2. Proyektor sebagai penunjang pembelajaran dan presentasi.  \u000a3. Ruangan ber-AC untuk kenyamanan mahasiswa.  \u000a4. Akses internet cepat untuk riset dan pengembangan aplikasi.  \u000a5. Software pendukung seperti Android Studio dan framework mobile lainnya.  ",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 59,
                          "url": "media/panorama_109ECB1D_1938_F949_419B_6BBDA6838247_0_HS_1_0_0_map.gif",
                          "width": 59,
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 7.44,
                       "pitch": 4.14,
                       "hfov": 7.03,
                       "class": "HotspotPanoramaOverlayMap"
                      }
                     ],
                     "enabledInCardboard": true
                    }
                   ],
                   "class": "SphericPanoramaFrame"
                  }
                 ]
                },
                "class": "AdjacentPanorama"
               }
              ],
              "class": "Panorama",
              "pitch": 0,
              "hfov": 360,
              "hfovMax": 120,
              "thumbnailUrl": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_t.jpg",
              "label": "Pintu Depan Lab. Mobile Technology dan Pintu Depan Perpustakaan",
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 3040,
                   "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_hq.jpeg",
                   "width": 6080,
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -17.76,
                    "yaw": 80.25,
                    "hfov": 9.89,
                    "image": {
                     "levels": [
                      {
                       "height": 173,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_0_0.png",
                       "width": 175,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0B35ABF9_1A0B_155D_419B_BC384304F959",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE, this.camera_9928166A_8DE0_A7D9_41BF_4E5C4895A7A7); this.mainPlayList.set('selectedIndex', 12)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 86,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_0_0_0_map.gif",
                       "width": 87,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 80.25,
                    "pitch": -17.76,
                    "hfov": 9.89,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": 5.71,
                    "yaw": 9.09,
                    "hfov": 15.98,
                    "image": {
                     "levels": [
                      {
                       "height": 257,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_1_0.png",
                       "width": 271,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0B04AD3A_1A09_72DC_41AE_2EE26B184EA8",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247, this.camera_993AA683_8DE0_A748_41D3_D9FC3B2CE9DD); this.mainPlayList.set('selectedIndex', 19)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 128,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_1_0_0_map.gif",
                       "width": 135,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 9.09,
                    "pitch": 5.71,
                    "hfov": 15.98,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": 16.28,
                    "yaw": -32.84,
                    "hfov": 13.57,
                    "image": {
                     "levels": [
                      {
                       "height": 271,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_2_0.png",
                       "width": 238,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0BFDC048_1A19_12BB_41AA_C610DEA5A786",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D, this.camera_9954A653_8DE0_A7C8_417B_DC51FEE43705); this.mainPlayList.set('selectedIndex', 18)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 135,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_2_0_0_map.gif",
                       "width": 119,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -32.84,
                    "pitch": 16.28,
                    "hfov": 13.57,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -22.38,
                    "yaw": -143.32,
                    "hfov": 12.29,
                    "image": {
                     "levels": [
                      {
                       "height": 224,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_3_0.png",
                       "width": 224,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_08C1EDC9_1A1F_2DBC_41B8_C5C304D1F87C",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7, this.camera_995F463A_8DE0_A7B9_41BF_01B1A7673C5A); this.mainPlayList.set('selectedIndex', 20)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 112,
                       "url": "media/panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_0_HS_3_0_0_map.gif",
                       "width": 112,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -143.32,
                    "pitch": -22.38,
                    "hfov": 12.29,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             },
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "hfov": 360,
           "hfovMax": 120,
           "thumbnailUrl": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_t.jpg",
           "label": "Lantai 2",
           "partial": false,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3040,
                "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_hq.jpeg",
                "width": 6080,
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -5.68,
                 "yaw": 0.63,
                 "hfov": 10.33,
                 "image": {
                  "levels": [
                   {
                    "height": 173,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_0_0.png",
                    "width": 175,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0F0AB82E_1958_274A_41AA_77797ED0E1C8",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 13)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 86,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_0_0_0_map.gif",
                    "width": 87,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 0.63,
                 "pitch": -5.68,
                 "hfov": 10.33,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -10.73,
                 "yaw": -84.53,
                 "hfov": 10.12,
                 "image": {
                  "levels": [
                   {
                    "height": 175,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_1_0.png",
                    "width": 173,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_145B8742_19F9_1EAC_4192_9F699935E3A6",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11, this.camera_99B5A57A_8DE0_A5B9_41E0_7DC6624132A2); this.mainPlayList.set('selectedIndex', 10)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 87,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_1_0_0_map.gif",
                    "width": 86,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -84.53,
                 "pitch": -10.73,
                 "hfov": 10.12,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -6.85,
                 "yaw": 154.24,
                 "hfov": 10.31,
                 "image": {
                  "levels": [
                   {
                    "height": 173,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_2_0.png",
                    "width": 175,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_1759DF25_19FB_2EF4_419D_7641133BFD12",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E, this.camera_998B1593_8DE0_A54F_41A6_6736BDE238D8); this.mainPlayList.set('selectedIndex', 17)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 86,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_2_0_0_map.gif",
                    "width": 87,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 154.24,
                 "pitch": -6.85,
                 "hfov": 10.31,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -6.5,
                 "yaw": -162.66,
                 "hfov": 10.32,
                 "image": {
                  "levels": [
                   {
                    "height": 173,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_3_0.png",
                    "width": 175,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_172190CA_19F9_33BF_41A2_38C0AF31812A",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 14)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 86,
                    "url": "media/panorama_0FC98319_1958_2956_4196_CBA8074C59EE_0_HS_3_0_0_map.gif",
                    "width": 87,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -162.66,
                 "pitch": -6.5,
                 "hfov": 10.32,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          },
          "class": "AdjacentPanorama"
         },
         {
          "yaw": -43.62,
          "backwardYaw": -22.85,
          "distance": 1,
          "panorama": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "pitch": 0,
        "hfov": 360,
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_t.jpg",
        "label": "Tangga Menuju Lantai 3",
        "partial": false,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3040,
             "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_hq.jpeg",
             "width": 6080,
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -18.38,
              "yaw": -164.44,
              "hfov": 9.86,
              "image": {
               "levels": [
                {
                 "height": 173,
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_0_0.png",
                 "width": 175,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0EF68138_1958_6957_419A_8C27E826B6E6",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE, this.camera_99AA2547_8DE0_A5C8_41B7_92E3C581B012); this.mainPlayList.set('selectedIndex', 12)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 86,
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_0_0_0_map.gif",
                 "width": 87,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -164.44,
              "pitch": -18.38,
              "hfov": 9.86,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": 3.38,
              "yaw": -43.62,
              "hfov": 10.28,
              "image": {
               "levels": [
                {
                 "height": 173,
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_1_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_015BE3B8_1948_E956_41AC_0E7CE8F98EE0",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_99BEC55E_8DE0_A5F8_41D1_14BCA4759A46); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 86,
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_1_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -43.62,
              "pitch": 3.38,
              "hfov": 10.28,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": 25.82,
              "yaw": -89.67,
              "hfov": 9.27,
              "image": {
               "levels": [
                {
                 "height": 173,
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_2_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0F2638BF_1A0B_13D5_419C_11804A553DDA",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 22)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 86,
                 "url": "media/panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_0_HS_2_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -89.67,
              "pitch": 25.82,
              "hfov": 9.27,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       },
       "class": "AdjacentPanorama"
      },
      {
       "yaw": 160.56,
       "backwardYaw": 3.6,
       "distance": 1,
       "panorama": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -56.63,
       "backwardYaw": 86.42,
       "distance": 1,
       "panorama": {
        "vfov": 180,
        "hfovMin": 60,
        "id": "panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
        "adjacentPanoramas": [
         {
          "yaw": -87.07,
          "backwardYaw": 173.79,
          "distance": 1,
          "panorama": {
           "vfov": 180,
           "hfovMin": 60,
           "id": "panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
           "adjacentPanoramas": [
            {
             "yaw": 173.79,
             "backwardYaw": -87.07,
             "distance": 1,
             "panorama": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
             "class": "AdjacentPanorama"
            },
            {
             "yaw": -73.5,
             "backwardYaw": 95.78,
             "distance": 1,
             "panorama": {
              "vfov": 180,
              "hfovMin": 60,
              "id": "panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
              "adjacentPanoramas": [
               {
                "yaw": 95.78,
                "backwardYaw": -73.5,
                "distance": 1,
                "panorama": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
                "class": "AdjacentPanorama"
               }
              ],
              "class": "Panorama",
              "pitch": 0,
              "hfov": 360,
              "hfovMax": 120,
              "thumbnailUrl": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_t.jpg",
              "label": "Toilet Lantai 1",
              "partial": false,
              "frames": [
               {
                "sphere": {
                 "levels": [
                  {
                   "height": 3040,
                   "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_hq.jpeg",
                   "width": 6080,
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA.jpeg",
                   "width": 3217,
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_t.jpg",
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -15.33,
                    "yaw": 95.78,
                    "hfov": 9.93,
                    "image": {
                     "levels": [
                      {
                       "height": 175,
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_0_0.png",
                       "width": 173,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0DECD267_19D8_2BF9_41A0_DA46C96C449B",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022, this.camera_99FBD4CE_8DE0_A4D8_41D5_16805EA9BA72); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 87,
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_0_0_0_map.gif",
                       "width": 86,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 95.78,
                    "pitch": -15.33,
                    "hfov": 9.93,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": -18.28,
                    "yaw": -80.82,
                    "hfov": 9.78,
                    "image": {
                     "levels": [
                      {
                       "height": 175,
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_1_0.png",
                       "width": 173,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_0FAC8BCA_19D8_18CB_41A7_D03ECF84D0AA",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 7)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 87,
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_1_0_0_map.gif",
                       "width": 86,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -80.82,
                    "pitch": -18.28,
                    "hfov": 9.78,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "data": {
                   "label": "Image"
                  },
                  "items": [
                   {
                    "pitch": 16.65,
                    "yaw": 24.67,
                    "hfov": 22.49,
                    "image": {
                     "levels": [
                      {
                       "height": 416,
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_2_0.png",
                       "width": 396,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage"
                   }
                  ],
                  "useHandCursor": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_2F1AF1EE_2276_064B_41A9_3739DB2A1024",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.showPopupPanoramaOverlay(this.popup_452C6691_4AB3_DC98_41B9_E112963125A7, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}, this.ImageResource_5B484BFF_4B53_5488_41CB_0210827413D8, null, null, null, null, false)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 200,
                       "url": "media/panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_0_HS_2_0_0_map.gif",
                       "width": 190,
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 24.67,
                    "pitch": 16.65,
                    "hfov": 22.49,
                    "class": "HotspotPanoramaOverlayMap"
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "hideEasing": "cubic_out",
                  "rotationY": 0,
                  "pitch": 16.65,
                  "hfov": 22.49,
                  "rotationZ": 0,
                  "yaw": 24.67,
                  "popupMaxWidth": "95%",
                  "hideDuration": 500,
                  "image": {
                   "levels": [
                    {
                     "height": 723,
                     "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_2.png",
                     "width": 1024,
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "popupMaxHeight": "95%",
                  "class": "PopupPanoramaOverlay",
                  "showEasing": "cubic_in",
                  "id": "popup_452C6691_4AB3_DC98_41B9_E112963125A7",
                  "showDuration": 500,
                  "rotationX": 0
                 }
                ],
                "class": "SphericPanoramaFrame"
               }
              ]
             },
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "pitch": 0,
           "hfov": 360,
           "hfovMax": 120,
           "thumbnailUrl": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_t.jpg",
           "label": "Langkah Kedua menuju Toilet dan Kantin",
           "partial": false,
           "frames": [
            {
             "sphere": {
              "levels": [
               {
                "height": 3040,
                "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_hq.jpeg",
                "width": 6080,
                "class": "ImageResourceLevel"
               },
               {
                "height": 1608,
                "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022.jpeg",
                "width": 3217,
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_t.jpg",
             "overlays": [
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -7.64,
                 "yaw": 173.79,
                 "hfov": 13.67,
                 "image": {
                  "levels": [
                   {
                    "height": 158,
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_0_0.png",
                    "width": 232,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0A9AF144_19D8_293E_4167_FC63E21B5D0E",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA, this.camera_991D96B3_8DE0_A74F_41C1_29E774F838F2); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 79,
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_0_0_0_map.gif",
                    "width": 116,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 173.79,
                 "pitch": -7.64,
                 "hfov": 13.67,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "data": {
                "label": "Image"
               },
               "items": [
                {
                 "pitch": -10.62,
                 "yaw": -73.5,
                 "hfov": 10.21,
                 "image": {
                  "levels": [
                   {
                    "height": 173,
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_1_0.png",
                    "width": 175,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage"
                }
               ],
               "useHandCursor": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_0A3DCA5A_19D8_3BCA_41B8_7BD9D5398BB2",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA, this.camera_991016CB_8DE0_A4D8_41DC_BA49905ABA57); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 86,
                    "url": "media/panorama_10A6CE96_1938_3B5A_4170_367AAC101022_0_HS_1_0_0_map.gif",
                    "width": 87,
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -73.5,
                 "pitch": -10.62,
                 "hfov": 10.21,
                 "class": "HotspotPanoramaOverlayMap"
                }
               ],
               "enabledInCardboard": true
              }
             ],
             "class": "SphericPanoramaFrame"
            }
           ]
          },
          "class": "AdjacentPanorama"
         },
         {
          "yaw": 86.42,
          "backwardYaw": -56.63,
          "distance": 1,
          "panorama": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "pitch": 0,
        "hfov": 360,
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_t.jpg",
        "label": "Langkah menuju Toilet",
        "partial": false,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3040,
             "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_hq.jpeg",
             "width": 6080,
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -5.75,
              "yaw": 86.42,
              "hfov": 10.33,
              "image": {
               "levels": [
                {
                 "height": 173,
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_0_0.png",
                 "width": 175,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0BEB1892_19C8_E75A_415A_3DA2590518F1",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_99C884FD_8DE0_A4BB_41DB_2E6BBFF0848C); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 86,
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_0_0_0_map.gif",
                 "width": 87,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 86.42,
              "pitch": -5.75,
              "hfov": 10.33,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -7.44,
              "yaw": -87.07,
              "hfov": 10.21,
              "image": {
               "levels": [
                {
                 "height": 175,
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_1_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_0A8BEB57_19C8_79DA_4195_B5D3E1255F1C",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022, this.camera_99F184E6_8DE0_A4C8_41DB_DD4BD2CA36F1); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 87,
                 "url": "media/panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_0_HS_1_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -87.07,
              "pitch": -7.44,
              "hfov": 10.21,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       },
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_t.jpg",
     "label": "Loby Kampus",
     "partial": false,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3040,
          "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_hq.jpeg",
          "width": 6080,
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4.jpeg",
          "width": 3217,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -8.3,
           "yaw": -144.85,
           "hfov": 8.06,
           "image": {
            "levels": [
             {
              "height": 154,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_0_0.png",
              "width": 137,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_17AA5829_1958_2776_4199_A0C3C3BC10FC",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_109B0239_1938_2B56_41B0_AB329B348192, this.camera_9D9087DE_8DE0_A4F9_41D8_76846C0E494A); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 77,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_0_0_0_map.gif",
              "width": 68,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -144.85,
           "pitch": -8.3,
           "hfov": 8.06,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -7.86,
           "yaw": -56.63,
           "hfov": 9.54,
           "image": {
            "levels": [
             {
              "height": 163,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_1_0.png",
              "width": 162,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_14E10E32_1948_1B5A_41B9_15A9936D22E6",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA, this.camera_9D7F7827_8DE0_AB48_41DE_84A2C3FFEEEC); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 81,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_1_0_0_map.gif",
              "width": 81,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -56.63,
           "pitch": -7.86,
           "hfov": 9.54,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -2.08,
           "yaw": -22.85,
           "hfov": 8.93,
           "image": {
            "levels": [
             {
              "height": 151,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_2_0.png",
              "width": 151,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_166CAE4D_1948_1BCE_41AF_4045D2198012",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11, this.camera_9D6AB7F7_8DE0_A4B7_41DD_E1F51F7EA8A0); this.mainPlayList.set('selectedIndex', 10)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 75,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_2_0_0_map.gif",
              "width": 75,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -22.85,
           "pitch": -2.08,
           "hfov": 8.93,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 0.05,
           "yaw": 160.56,
           "hfov": 8.94,
           "image": {
            "levels": [
             {
              "height": 151,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_3_0.png",
              "width": 151,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_1658A852_1948_27DA_41B3_063F0E9C6470",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403, this.camera_9D65B810_8DE0_AB49_41DD_02A92814BCB8); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 75,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_3_0_0_map.gif",
              "width": 75,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 160.56,
           "pitch": 0.05,
           "hfov": 8.94,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 5.78,
           "yaw": -99.69,
           "hfov": 10.24,
           "image": {
            "levels": [
             {
              "height": 173,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_7_0.png",
              "width": 173,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_89B4375F_87F9_9797_41D8_E3DE0BAB06EB",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_577B9DF6_468F_3A5A_41C5_27F4B9282923, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}) } else { this.showPopupMedia(this.window_87D7CD2C_8DE0_E559_41BA_E995E767EF44, this.video_0E928F34_038D_B7E6_415C_D046B5012510, this.PlayList_9D80311C_8DE1_9D78_41DF_0CAAF0EE63A6, '95%', '95%', true, true); this.PlayList_9D80311C_8DE1_9D78_41DF_0CAAF0EE63A6.set('selectedIndex', 0); ; this.viewer_uid9DC230DE_8DE1_9CF9_41CA_9BD8E7B78CEDVideoPlayer.play();  }",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 86,
              "url": "media/panorama_109D177D_1938_29CE_4198_0172C7F25AB4_0_HS_7_0_0_map.gif",
              "width": 86,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -99.69,
           "pitch": 5.78,
           "hfov": 10.24,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "autoplay": true,
         "pitch": 5.78,
         "hfov": 10.24,
         "rotationZ": 0,
         "yaw": -99.69,
         "rotationY": 0,
         "popupMaxWidth": "95%",
         "showDuration": 500,
         "hideEasing": "cubic_out",
         "popupMaxHeight": "95%",
         "video": {
          "mp4Url": "media/video_0E928F34_038D_B7E6_415C_D046B5012510.mp4",
          "width": 1920,
          "height": 1080,
          "class": "VideoResource"
         },
         "class": "PopupPanoramaOverlay",
         "showEasing": "cubic_in",
         "id": "popup_577B9DF6_468F_3A5A_41C5_27F4B9282923",
         "loop": false,
         "hideDuration": 500,
         "rotationX": 0
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ]
    },
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_t.jpg",
  "label": "Pintu Depan Kampus",
  "partial": false,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 7.16,
        "yaw": 3.6,
        "hfov": 15.94,
        "image": {
         "levels": [
          {
           "height": 280,
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_0_0.png",
           "width": 271,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1444A13B_1938_294A_4192_117040CE0C17",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4, this.camera_996335F3_8DE0_A4CF_41CF_56672EAFB885); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 140,
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_0_0_0_map.gif",
           "width": 135,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 3.6,
        "pitch": 7.16,
        "hfov": 15.94,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 19.51,
        "yaw": 49.8,
        "hfov": 9.7,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_3_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_4A184AA4_4685_7EFF_41BF_66832A290C5D",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}, this.ImageResource_49BCA3A4_469F_0EFE_41D0_04BEB03F9865, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_10995283_1938_2B3A_41B8_3BFAD913E403_0_HS_3_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 49.8,
        "pitch": 19.51,
        "hfov": 9.7,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": 19.51,
      "hfov": 9.7,
      "rotationZ": 0,
      "yaw": 49.8,
      "popupMaxWidth": "95%",
      "hideDuration": 500,
      "image": {
       "levels": [
        {
         "height": 723,
         "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_2.png",
         "width": 1024,
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in",
      "id": "popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A",
      "showDuration": 500,
      "rotationX": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "buttonZoomOut": "this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656",
  "buttonZoomIn": "this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714",
  "viewerArea": "this.MainViewer",
  "buttonMoveDown": "this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "buttonPlayRight": "this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45",
  "buttonMoveUp": "this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718",
  "class": "PanoramaPlayer",
  "buttonMoveLeft": "this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B",
  "buttonPlayLeft": "this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8",
  "buttonMoveRight": "this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D",
  "touchControlMode": "drag_rotation",
  "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10995283_1938_2B3A_41B8_3BFAD913E403_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109D177D_1938_29CE_4198_0172C7F25AB4_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109B0239_1938_2B56_41B0_AB329B348192_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10997093_1938_E75A_4174_6DF3A6A75EED_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10A6CE96_1938_3B5A_4170_367AAC101022_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
  "adjacentPanoramas": [
   {
    "yaw": 148.54,
    "backwardYaw": 117.04,
    "distance": 1,
    "panorama": {
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
     "adjacentPanoramas": [
      {
       "yaw": 117.04,
       "backwardYaw": 148.54,
       "distance": 1,
       "panorama": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_t.jpg",
     "label": "Ruang Depan Badan Eksekutif Mahasiswa",
     "partial": false,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3040,
          "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_hq.jpeg",
          "width": 6080,
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27.jpeg",
          "width": 3217,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -13.09,
           "yaw": -127.72,
           "hfov": 12.79,
           "image": {
            "levels": [
             {
              "height": 173,
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_0_0.png",
              "width": 221,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0A6F1AAC_19D8_FB4E_4186_8FE8A382F135",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 86,
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_0_0_0_map.gif",
              "width": 110,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -127.72,
           "pitch": -13.09,
           "hfov": 12.79,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -16.04,
           "yaw": 117.04,
           "hfov": 9.98,
           "image": {
            "levels": [
             {
              "height": 173,
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_1_0.png",
              "width": 175,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0DD09B67_19C8_79FA_41B2_B3827C2F7F79",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874, this.camera_994BA622_8DE0_A749_41CC_ECBB4C217B7A); this.mainPlayList.set('selectedIndex', 7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 86,
              "url": "media/panorama_109EEF72_1938_19DA_41AA_35A62898EA27_0_HS_1_0_0_map.gif",
              "width": 87,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 117.04,
           "pitch": -16.04,
           "hfov": 9.98,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ]
    },
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_t.jpg",
  "label": "Kantin Kampus",
  "partial": false,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -27.44,
        "yaw": 148.54,
        "hfov": 13.12,
        "image": {
         "levels": [
          {
           "height": 303,
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_0_0.png",
           "width": 249,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0DFD20C0_19D8_2736_41B1_173E6112DA55",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27, this.camera_9D9B47AD_8DE0_A558_41D9_9091330AF7E5); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 151,
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_0_0_0_map.gif",
           "width": 124,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 148.54,
        "pitch": -27.44,
        "hfov": 13.12,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 9.97,
        "yaw": -88.51,
        "hfov": 26.09,
        "image": {
         "levels": [
          {
           "height": 331,
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_1_0.png",
           "width": 447,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_35A7D755_3B5B_450C_41CD_59FE8A7DDC6F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Berikut deskripsi yang lebih lengkap dan ringkas untuk **kantin kampus**:  \u000a\u000a1. Tersedia **meja dan kursi yang nyaman** untuk mahasiswa bersantai dan makan.  \u000a2. **Harga makanan terjangkau** dengan variasi menu yang sesuai untuk mahasiswa.  \u000a3. Dilengkapi dengan **wastafel** untuk mencuci tangan sebelum dan sesudah makan.  \u000a4. Menyediakan berbagai pilihan makanan dan minuman, mulai dari makanan berat hingga camilan.  \u000a5. Area kantin yang **bersih dan terawat** untuk kenyamanan pengunjung.  ",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 147,
           "url": "media/panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_0_HS_1_0_0_map.gif",
           "width": 200,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -88.51,
        "pitch": 9.97,
        "hfov": 26.09,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
 {
  "manualRotationSpeed": 222,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109EEF72_1938_19DA_41AA_35A62898EA27_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_t.jpg",
  "label": "Ruang Depan Dewan Perwakilan Mahasiswa.jpg",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 7.22,
        "yaw": -121.45,
        "hfov": 10.21,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0EAB04FC_0397_EA66_4165_D9E2D84D2F5C",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_456D0585_4AB2_DD78_41D0_1B743B283D0B, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}) } else { this.showPopupMedia(this.window_87D5CD29_8DE0_E55B_41C4_2CEAD1AFC870, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46, this.PlayList_9D80A11C_8DE1_9D78_4156_E693C93038EC, '95%', '95%', true, true); this.PlayList_9D80A11C_8DE1_9D78_4156_E693C93038EC.set('selectedIndex', 0); ; this.viewer_uid9DCD10E5_8DE1_9CC8_41C6_468E762F104EVideoPlayer.play();  }",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -121.45,
        "pitch": 7.22,
        "hfov": 10.21,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "autoplay": true,
      "pitch": 7.22,
      "hfov": 10.21,
      "rotationZ": 0,
      "yaw": -121.45,
      "rotationY": 0,
      "popupMaxWidth": "95%",
      "showDuration": 500,
      "hideEasing": "cubic_out",
      "popupMaxHeight": "95%",
      "video": {
       "mp4Url": "media/video_0DF3228A_0396_AEA2_4170_E28BA043FB46.mp4",
       "width": 1920,
       "height": 1080,
       "class": "VideoResource"
      },
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in",
      "id": "popup_456D0585_4AB2_DD78_41D0_1B743B283D0B",
      "loop": false,
      "hideDuration": 500,
      "rotationX": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_10976D64_1F49_4F58_41BA_450A6981940F",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_t.jpg",
  "label": "Lift lantai 2",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 20.4,
        "yaw": 36.14,
        "hfov": 9.65,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0FCBF523_1F48_BCD9_41AD_DB98FE54F8DC",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 24)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 36.14,
        "pitch": 20.4,
        "hfov": 9.65,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -14.95,
        "yaw": 150.74,
        "hfov": 10.03,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_1_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0FF07B69_1F4B_4B29_419E_4FB50AAFED31",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_1_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 150.74,
        "pitch": -14.95,
        "hfov": 10.03,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 39.51,
        "yaw": 8.13,
        "hfov": 7.94,
        "image": {
         "levels": [
          {
           "height": 175,
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_2_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3AFAFC86_37AB_8EFF_41C6_A2A4E5E9C710",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": "Lift di ITB STIKOM Bali dirancang untuk memudahkan mobilitas mahasiswa, dosen, staf, serta pengunjung, termasuk mereka yang memiliki kebutuhan khusus. Dengan kapasitas maksimal 3-4 orang, tergantung berat badan pengguna, lift ini memastikan perjalanan yang aman dan nyaman di dalam gedung.\u000a\u000aLift ini melayani total 4 lantai, mencakup berbagai fasilitas akademik dan administratif. Sebagai bagian dari komitmen kampus dalam menciptakan lingkungan yang inklusif, lift ini juga mempermudah akses bagi penyandang disabilitas, terutama bagi pengguna kursi roda. Dengan desain yang ergonomis dan sistem keamanan yang terjaga, fasilitas ini memberikan kenyamanan bagi seluruh civitas akademika. Selain itu, perawatan rutin dilakukan secara berkala untuk memastikan kinerja lift tetap optimal dan aman digunakan.",
        "click": "this.showPopupPanoramaOverlay(this.popup_4B62590E_5BEB_B4FD_41C6_6250545A457D, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}, this.ImageResource_4B2C9681_5BEB_5DE7_41C7_CD0942C11FE6, null, null, null, null, false)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 87,
           "url": "media/panorama_10976D64_1F49_4F58_41BA_450A6981940F_0_HS_2_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 8.13,
        "pitch": 39.51,
        "hfov": 7.94,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": 39.51,
      "hfov": 7.94,
      "rotationZ": 0,
      "yaw": 8.13,
      "popupMaxWidth": "95%",
      "hideDuration": 500,
      "image": {
       "levels": [
        {
         "height": 723,
         "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_2.png",
         "width": 1024,
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in",
      "id": "popup_4B62590E_5BEB_B4FD_41C6_6250545A457D",
      "showDuration": 500,
      "rotationX": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10976D64_1F49_4F58_41BA_450A6981940F_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0FC98319_1958_2956_4196_CBA8074C59EE_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_t.jpg",
  "label": "Ruang Akademik",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -14.53,
        "yaw": 97.68,
        "hfov": 10.05,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_0_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0CB72535_19C8_695E_41A9_2F90B1A7D5C6",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_0_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 97.68,
        "pitch": -14.53,
        "hfov": 10.05,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -15.98,
        "yaw": -92.51,
        "hfov": 9.98,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_1_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0E0167E5_1F48_BB59_41A8_A38C86F941F3",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_0_HS_1_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -92.51,
        "pitch": -15.98,
        "hfov": 9.98,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_t.jpg",
  "label": "Langkah Pertama Menuju Lab.Multimedia",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -10.14,
        "yaw": 5.36,
        "hfov": 10.22,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_0_HS_0_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0F9B4067_19C8_27FA_41B2_2C30A70C2875",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_0_HS_0_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 5.36,
        "pitch": -10.14,
        "hfov": 10.22,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
  "adjacentPanoramas": [
   {
    "yaw": -89.12,
    "backwardYaw": 130.24,
    "distance": 1,
    "panorama": {
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
     "adjacentPanoramas": [
      {
       "yaw": 130.24,
       "backwardYaw": -89.12,
       "distance": 1,
       "panorama": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_t.jpg",
     "label": "Lab.Multimedia",
     "partial": false,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3040,
          "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_hq.jpeg",
          "width": 6080,
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF.jpeg",
          "width": 3217,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 5.58,
           "yaw": 130.24,
           "hfov": 10.25,
           "image": {
            "levels": [
             {
              "height": 173,
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_0_0.png",
              "width": 173,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_0A45F00C_1A0B_12B4_41AF_1FC19CE244D6",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130, this.camera_9D7A6840_8DE0_ABC9_41E1_9D6BBAB2215C); this.mainPlayList.set('selectedIndex', 15)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 86,
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_0_0_0_map.gif",
              "width": 86,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 130.24,
           "pitch": 5.58,
           "hfov": 10.25,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 6.33,
           "yaw": 161.19,
           "hfov": 10.23,
           "image": {
            "levels": [
             {
              "height": 173,
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_1_0.png",
              "width": 173,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_44CB8206_4B52_D778_41C6_8E78282880C0",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 16, this.audio_44BB5482_4B52_B378_41C8_965C66C5ADC7)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 86,
              "url": "media/panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_0_HS_1_0_0_map.gif",
              "width": 86,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 161.19,
           "pitch": 6.33,
           "hfov": 10.23,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ]
    },
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_t.jpg",
  "label": "langkah Kedua menuju Lab.Multimedia",
  "partial": false,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 3.52,
        "yaw": -89.12,
        "hfov": 10.28,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_1530C077_1A09_7355_414B_19761FA102A7",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF, this.camera_9D743857_8DE0_ABF7_41D8_4A1B117F11DD); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -89.12,
        "pitch": 3.52,
        "hfov": 10.28,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
 {
  "manualRotationSpeed": 268,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 1,
  "id": "panorama_109ECB1D_1938_F949_419B_6BBDA6838247_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_1099D97F_1938_19CA_41AD_212C3809B1AC",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_t.jpg",
  "label": "Langkah Kedua menuju Toilet dan Musholla di Lantai 2",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_t.jpg",
  "label": "Tangga Ke Lantai 4-2",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -7.19,
        "yaw": 0.63,
        "hfov": 10.3,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_0_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0F7FDE3B_1A09_EEDD_41AA_9E724943EB1A",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_0_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 0.63,
        "pitch": -7.19,
        "hfov": 10.3,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 28.16,
        "yaw": 82.4,
        "hfov": 9.08,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_1_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_16F0050E_1AAC_F8CB_41B5_78E31642A7C5",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 29)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_0_HS_1_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 82.4,
        "pitch": 28.16,
        "hfov": 9.08,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_t.jpg",
  "label": "Lantai 3",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -7.12,
        "yaw": 86.01,
        "hfov": 10.3,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_0_HS_0_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0CE721EF_1A0F_3575_41B9_43A7A97C2587",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 25)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_0_HS_0_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 86.01,
        "pitch": -7.12,
        "hfov": 10.3,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
  "adjacentPanoramas": [
   {
    "yaw": 32.98,
    "backwardYaw": 30.51,
    "distance": 1,
    "panorama": {
     "vfov": 180,
     "hfovMin": 60,
     "id": "panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
     "adjacentPanoramas": [
      {
       "yaw": 30.51,
       "backwardYaw": 32.98,
       "distance": 1,
       "panorama": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
       "class": "AdjacentPanorama"
      },
      {
       "yaw": -159.89,
       "backwardYaw": -84.18,
       "distance": 1,
       "panorama": {
        "vfov": 180,
        "hfovMin": 60,
        "id": "panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
        "adjacentPanoramas": [
         {
          "yaw": -84.18,
          "backwardYaw": -159.89,
          "distance": 1,
          "panorama": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "pitch": 0,
        "hfov": 360,
        "hfovMax": 120,
        "thumbnailUrl": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_t.jpg",
        "label": "Lantai 4-2",
        "partial": false,
        "frames": [
         {
          "sphere": {
           "levels": [
            {
             "height": 3040,
             "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_hq.jpeg",
             "width": 6080,
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0.jpeg",
             "width": 3217,
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_t.jpg",
          "overlays": [
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -6.09,
              "yaw": 78.33,
              "hfov": 10.33,
              "image": {
               "levels": [
                {
                 "height": 173,
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_0_0.png",
                 "width": 175,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_1501C16F_1AD7_BB49_41A1_FEBD102FB822",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.mainPlayList.set('selectedIndex', 31)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 86,
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_0_0_0_map.gif",
                 "width": 87,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 78.33,
              "pitch": -6.09,
              "hfov": 10.33,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "data": {
             "label": "Image"
            },
            "items": [
             {
              "pitch": -9.98,
              "yaw": -84.18,
              "hfov": 10.14,
              "image": {
               "levels": [
                {
                 "height": 175,
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_1_0.png",
                 "width": 173,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "class": "HotspotPanoramaOverlayImage"
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_11F520A2_1F39_55D8_4184_BB5F2F815630",
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD, this.camera_990D269B_8DE0_A778_41E0_D23091D0F6EB); this.mainPlayList.set('selectedIndex', 28)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 87,
                 "url": "media/panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_0_HS_1_0_0_map.gif",
                 "width": 86,
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -84.18,
              "pitch": -9.98,
              "hfov": 10.14,
              "class": "HotspotPanoramaOverlayMap"
             }
            ],
            "enabledInCardboard": true
           }
          ],
          "class": "SphericPanoramaFrame"
         }
        ]
       },
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "pitch": 0,
     "hfov": 360,
     "hfovMax": 120,
     "thumbnailUrl": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_t.jpg",
     "label": "Lift Lantai 4",
     "partial": false,
     "frames": [
      {
       "sphere": {
        "levels": [
         {
          "height": 3040,
          "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_hq.jpeg",
          "width": 6080,
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD.jpeg",
          "width": 3217,
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": 18.21,
           "yaw": 30.51,
           "hfov": 9.78,
           "image": {
            "levels": [
             {
              "height": 173,
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_0_0.png",
              "width": 173,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_13FB43EB_1F38_BB29_4191_D6156D5D3E09",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA, this.camera_9D85D77E_8DE0_A5B9_4189_32A6CD4DDE6E); this.mainPlayList.set('selectedIndex', 24)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 86,
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_0_0_0_map.gif",
              "width": 86,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 30.51,
           "pitch": 18.21,
           "hfov": 9.78,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "data": {
          "label": "Image"
         },
         "items": [
          {
           "pitch": -11.76,
           "yaw": -159.89,
           "hfov": 10.08,
           "image": {
            "levels": [
             {
              "height": 175,
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_1_0.png",
              "width": 173,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "class": "HotspotPanoramaOverlayImage"
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_124C0213_1F3B_74F9_41B2_C3CB661FD1A2",
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0, this.camera_9D814795_8DE0_A548_41AF_9F57EFAE89DC); this.mainPlayList.set('selectedIndex', 30)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 87,
              "url": "media/panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_0_HS_1_0_0_map.gif",
              "width": 86,
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -159.89,
           "pitch": -11.76,
           "hfov": 10.08,
           "class": "HotspotPanoramaOverlayMap"
          }
         ],
         "enabledInCardboard": true
        }
       ],
       "class": "SphericPanoramaFrame"
      }
     ]
    },
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_t.jpg",
  "label": "Lift Lantai 3",
  "partial": false,
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -22.77,
        "yaw": -161.7,
        "hfov": 9.58,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_0_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_11CB52FB_1F38_F52F_417A_14FEA19B8889",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_0_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -161.7,
        "pitch": -22.77,
        "hfov": 9.58,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 11,
        "yaw": 32.98,
        "hfov": 10.11,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_1_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_109E0ADE_1F39_D56B_4194_ECD9D25AB4E2",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD, this.camera_99DE3515_8DE0_A548_41B7_D182115B1410); this.mainPlayList.set('selectedIndex', 28)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_1_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 32.98,
        "pitch": 11,
        "hfov": 10.11,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 6.29,
        "yaw": -0.79,
        "hfov": 10.23,
        "image": {
         "levels": [
          {
           "height": 175,
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_2_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A143879_37B8_7615_41B4_A5766AC1773E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "Lift di ITB STIKOM Bali dirancang untuk memudahkan mobilitas mahasiswa, dosen, staf, serta pengunjung, termasuk mereka yang memiliki kebutuhan khusus. Dengan kapasitas maksimal 3-4 orang, tergantung berat badan pengguna, lift ini memastikan perjalanan yang aman dan nyaman di dalam gedung.\u000a\u000aLift ini melayani total 4 lantai, mencakup berbagai fasilitas akademik dan administratif. Sebagai bagian dari komitmen kampus dalam menciptakan lingkungan yang inklusif, lift ini juga mempermudah akses bagi penyandang disabilitas, terutama bagi pengguna kursi roda. Dengan desain yang ergonomis dan sistem keamanan yang terjaga, fasilitas ini memberikan kenyamanan bagi seluruh civitas akademika. Selain itu, perawatan rutin dilakukan secara berkala untuk memastikan kinerja lift tetap optimal dan aman digunakan.",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 87,
           "url": "media/panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_0_HS_2_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -0.79,
        "pitch": 6.29,
        "hfov": 10.23,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_t.jpg",
  "label": "Langkah ke 2 menuju lab Programming-2",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -10.55,
        "yaw": -8.78,
        "hfov": 10.21,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_0_HS_0_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_168B17F2_1AAD_C75B_418D_F2A115D9F8B2",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_0_HS_0_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -8.78,
        "pitch": -10.55,
        "hfov": 10.21,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_10A71934_1938_195E_41B3_0309FAD7BA52",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52_t.jpg",
  "label": "Lab.Programming",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_10A71934_1938_195E_41B3_0309FAD7BA52_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_10A71934_1938_195E_41B3_0309FAD7BA52_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_1098E60C_1938_EB4E_419D_A499CEAB628C",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_t.jpg",
  "label": "Lab. Web Technology-2",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2160,
       "url": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_hq.jpeg",
       "width": 3840,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1809,
       "url": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_t.jpg",
  "label": "Lantai Terakhir",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -1.84,
        "yaw": 101.82,
        "hfov": 10.29,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_14319853_1AD5_C959_419C_79AB693B13E9",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 101.82,
        "pitch": -1.84,
        "hfov": 10.29,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": -6.85,
        "yaw": 6.39,
        "hfov": 10.31,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_1_0.png",
           "width": 175,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_141D76A0_1AD4_D9F7_4187_1D2D203C4350",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 30)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_0_HS_1_0_0_map.gif",
           "width": 87,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 6.39,
        "pitch": -6.85,
        "hfov": 10.31,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_1099382C_193B_E74E_4194_4648FBC8CA15",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_t.jpg",
  "label": "Pintu Depan Aula",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 23.08,
        "yaw": 1.2,
        "hfov": 9.47,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_0AFB871C_1AD4_58CF_41A5_99F857C8E40E",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 32)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_1099382C_193B_E74E_4194_4648FBC8CA15_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 1.2,
        "pitch": 23.08,
        "hfov": 9.47,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_1099382C_193B_E74E_4194_4648FBC8CA15_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_t.jpg",
  "label": "Aula",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 4.02,
        "yaw": 1.89,
        "hfov": 10.27,
        "image": {
         "levels": [
          {
           "height": 175,
           "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A4FA7FD_37A8_BA0D_41A5_C830F93F0084",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "toolTip": " Aula Kampus ITB STIKOM Bali  \u000a\u000a1. **Kapasitas Fleksibel**  \u000a   Aula kampus dilengkapi dengan **50 kursi yang dapat disesuaikan** sesuai kebutuhan, mendukung berbagai kegiatan akademik maupun non-akademik.  \u000a\u000a2. **Ruangan Luas dan Multifungsi**  \u000a   Aula memiliki **ruang yang luas**, cocok untuk berbagai kegiatan seperti **seminar, pelatihan, rapat organisasi, kegiatan UKM, dan acara kampus lainnya**.  \u000a\u000a3. **Sistem Pendingin yang Optimal**  \u000a   Dilengkapi dengan **8 unit AC**, memastikan suhu ruangan tetap nyaman selama kegiatan berlangsung.  \u000a\u000a4. **Fasilitas Audio-Visual**  \u000a   Aula kampus juga didukung dengan **proyektor, layar presentasi, dan sistem audio berkualitas**, mendukung kelancaran presentasi dan acara lainnya.  \u000a\u000a5. **Pencahayaan yang Baik**  \u000a   Menggunakan sistem pencahayaan yang memadai, mendukung kenyamanan dalam berbagai kegiatan, baik formal maupun non-formal.  \u000a\u000a6. **Akses Listrik dan Internet**  \u000a   Dilengkapi dengan **beberapa titik stop kontak** dan **akses Wi-Fi kampus**, memungkinkan mahasiswa dan tamu untuk tetap terhubung selama acara.  \u000a\u000a7. **Desain Interior yang Representatif**  \u000a   Aula didesain dengan konsep yang profesional dan nyaman, menciptakan suasana yang kondusif untuk pembelajaran dan interaksi sosial.  \u000a",
        "click": "this.showPopupPanoramaOverlay(this.popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}, this.ImageResource_54D3887E_5BD5_551D_41B3_5A4B9DA66396, null, null, null, null, false)"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 87,
           "url": "media/panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 1.89,
        "pitch": 4.02,
        "hfov": 10.27,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": 4.02,
      "hfov": 10.27,
      "rotationZ": 0,
      "yaw": 1.89,
      "popupMaxWidth": "95%",
      "hideDuration": 500,
      "image": {
       "levels": [
        {
         "height": 723,
         "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_2.png",
         "width": 1024,
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in",
      "id": "popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B",
      "showDuration": 500,
      "rotationX": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_1099859C_1938_294F_41AA_B658622986F1",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "hfovMax": 120,
  "thumbnailUrl": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_t.jpg",
  "label": "Ruang Kelas",
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 3040,
       "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_hq.jpeg",
       "width": 6080,
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1.jpeg",
       "width": 3217,
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "data": {
       "label": "Image"
      },
      "items": [
       {
        "pitch": 23.97,
        "yaw": -157.49,
        "hfov": 9.41,
        "image": {
         "levels": [
          {
           "height": 173,
           "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_0_HS_0_0.png",
           "width": 173,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayImage"
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A1E037F_36A9_9A0D_41B8_90F18E32E98F",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78, {'rollOverIconLineWidth':5,'paddingLeft':5,'iconWidth':20,'pressedBackgroundOpacity':0.3,'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','rollOverIconWidth':20,'pressedIconHeight':20,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconColor':'#666666','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderSize':0,'rollOverBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconHeight':20,'pressedIconColor':'#888888','borderSize':0,'backgroundOpacity':0.3,'paddingRight':5,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedIconLineWidth':5}, this.ImageResource_64A49399_6A8F_767C_41D1_43AD00694F38, null, null, null, null, false)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 86,
           "url": "media/panorama_1099859C_1938_294F_41AA_B658622986F1_0_HS_0_0_0_map.gif",
           "width": 86,
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -157.49,
        "pitch": 23.97,
        "hfov": 9.41,
        "class": "HotspotPanoramaOverlayMap"
       }
      ],
      "enabledInCardboard": true
     },
     {
      "hideEasing": "cubic_out",
      "rotationY": 0,
      "pitch": 23.97,
      "hfov": 9.41,
      "rotationZ": 0,
      "yaw": -157.49,
      "popupMaxWidth": "95%",
      "hideDuration": 500,
      "image": {
       "levels": [
        {
         "height": 723,
         "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_2.png",
         "width": 1024,
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "popupMaxHeight": "95%",
      "class": "PopupPanoramaOverlay",
      "showEasing": "cubic_in",
      "id": "popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78",
      "showDuration": 500,
      "rotationX": 0
     }
    ],
    "class": "SphericPanoramaFrame"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_1099859C_1938_294F_41AA_B658622986F1_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 0,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "id": "video_8B678B38_87F9_7F99_41DA_4050DE3A575A",
  "width": 1920,
  "height": 1080,
  "thumbnailUrl": "media/video_8B678B38_87F9_7F99_41DA_4050DE3A575A_t.jpg",
  "label": "Pengenalan Kampus ITB STIKOM Bali",
  "video": {
   "mp4Url": "media/video_8B678B38_87F9_7F99_41DA_4050DE3A575A.mp4",
   "width": 1920,
   "height": 1080,
   "class": "VideoResource"
  },
  "class": "Video",
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer",
  "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "id": "video_0E928F34_038D_B7E6_415C_D046B5012510",
  "width": 1920,
  "height": 1080,
  "thumbnailUrl": "media/video_0E928F34_038D_B7E6_415C_D046B5012510_t.jpg",
  "label": "Pengenalan Kampus ITB STIKOM Bali",
  "video": {
   "mp4Url": "media/video_0E928F34_038D_B7E6_415C_D046B5012510.mp4",
   "width": 1920,
   "height": 1080,
   "class": "VideoResource"
  },
  "class": "Video",
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "id": "video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
  "width": 1920,
  "height": 1080,
  "thumbnailUrl": "media/video_0DF3228A_0396_AEA2_4170_E28BA043FB46_t.jpg",
  "label": "Apa itu UKM",
  "video": {
   "mp4Url": "media/video_0DF3228A_0396_AEA2_4170_E28BA043FB46.mp4",
   "width": 1920,
   "height": 1080,
   "class": "VideoResource"
  },
  "class": "Video",
  "scaleMode": "fit_inside",
  "loop": false
 },
 {
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_4B29E45B_4687_0A4A_41CB_46B35037E405_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "duration": 5000,
      "id": "album_4B29E45B_4687_0A4A_41CB_46B35037E405_0",
      "width": 3508,
      "height": 2480,
      "thumbnailUrl": "media/album_4B29E45B_4687_0A4A_41CB_46B35037E405_0_t.png",
      "label": "pintu depan loby",
      "image": {
       "levels": [
        {
         "url": "media/album_4B29E45B_4687_0A4A_41CB_46B35037E405_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     },
     "camera": {
      "duration": 5000,
      "targetPosition": {
       "x": "0.42",
       "zoomFactor": 1.1,
       "y": "0.64",
       "class": "PhotoCameraPosition"
      },
      "easing": "linear",
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "initialPosition": {
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50",
       "class": "PhotoCameraPosition"
      }
     }
    }
   ]
  },
  "label": "Photo Album pintu depan loby",
  "class": "PhotoAlbum",
  "id": "album_4B29E45B_4687_0A4A_41CB_46B35037E405",
  "thumbnailUrl": "media/album_4B29E45B_4687_0A4A_41CB_46B35037E405_t.png"
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
  "viewerArea": "this.MainViewer"
 },
 "this.album_4B29E45B_4687_0A4A_41CB_46B35037E405_0",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "end": "this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); if(this.existsKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')){ if(this.getKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')) { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, false, -1, this.effect_9D738859_8DE0_ABFB_41D7_61D7F72CB530, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2'); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false)",
    "camera": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
    "begin": "this.registerKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2', this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, true, -1, this.effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372, 'showEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, true, -1, this.effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F, 'showEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, true, -1, this.effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617, 'showEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, true, -1, this.effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE, 'showEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, true, -1, this.effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E, 'showEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, true, -1, this.effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915, 'showEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, true, -1, this.effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3, 'showEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, true, -1, this.effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6, 'showEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, true, -1, this.effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95, 'showEffect', false); this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, true, -1, this.effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB, 'showEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19, this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247)",
    "media": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1099859C_1938_294F_41AA_B658622986F1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1099859C_1938_294F_41AA_B658622986F1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "class": "PanoramaPlayListItem"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 34, this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A)",
    "media": "this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 34, 35)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 35, this.video_0E928F34_038D_B7E6_415C_D046B5012510)",
    "media": "this.video_0E928F34_038D_B7E6_415C_D046B5012510",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 35, 36)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 36, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 36, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46)",
    "media": "this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 36, 37)"
   },
   {
    "end": "this.trigger('tourEnded')",
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_4B29E45B_4687_0A4A_41CB_46B35037E405",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist",
  "items": [
   {
    "end": "this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, false, -1, this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, false, -1, this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, false, -1, this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, false, -1, this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, false, -1, this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, false, -1, this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, false, -1, this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, false, -1, this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, false, -1, this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0, 'hideEffect', false); if(this.existsKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')){ if(this.getKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2')) { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); } else { this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, false, -1, this.effect_9D724860_8DE0_ABC9_41D0_D3B48A2B8498, 'hideEffect', false); } }; this.unregisterKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2'); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, false, -1, this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C, 'hideEffect', false)",
    "camera": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10995283_1938_2B3A_41B8_3BFAD913E403",
    "begin": "this.registerKey('visibility_IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2', this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2.get('visible')); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 0, 1); this.setComponentVisibility(this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452, false, -1, this.effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38, 'hideEffect', false); this.setComponentVisibility(this.IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714, true, -1, this.effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372, 'showEffect', false); this.setComponentVisibility(this.IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656, true, -1, this.effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F, 'showEffect', false); this.setComponentVisibility(this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464, true, -1, this.effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617, 'showEffect', false); this.setComponentVisibility(this.Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D, true, -1, this.effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE, 'showEffect', false); this.setComponentVisibility(this.Button_5B8D543D_4B4F_B388_41B6_AD893F62387B, true, -1, this.effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E, 'showEffect', false); this.setComponentVisibility(this.Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718, true, -1, this.effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915, 'showEffect', false); this.setComponentVisibility(this.Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED, true, -1, this.effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3, 'showEffect', false); this.setComponentVisibility(this.Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8, true, -1, this.effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6, 'showEffect', false); this.setComponentVisibility(this.Button_5BF55C76_4BB3_5398_41CA_6741290B2B45, true, -1, this.effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95, 'showEffect', false); this.setComponentVisibility(this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2, true, -1, this.effect_58006734_4BB1_5D98_41CF_317A7496F898, 'showEffect', false); this.setComponentVisibility(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71, true, -1, this.effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB, 'showEffect', false)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109D177D_1938_29CE_4198_0172C7F25AB4",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 1, 2)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109B0239_1938_2B56_41B0_AB329B348192",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 2, 3)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10997093_1938_E75A_4174_6DF3A6A75EED",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 3, 4)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109A7F44_1938_793E_41B1_1C0C012C65CA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 4, 5)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10A6CE96_1938_3B5A_4170_367AAC101022",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 5, 6)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109EC60D_1938_EB4E_41A8_F76EF8C571DA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 6, 7)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10F287B2_1938_295A_41B2_7F3AF60FF874",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 7, 8)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109EEF72_1938_19DA_41AA_35A62898EA27",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 8, 9)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0CAC826E_19C8_EBCA_419C_641D04FFA20F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 9, 10)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C1EFC42_1958_7F3A_41A6_F90CA9238B11",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 10, 11)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10976D64_1F49_4F58_41BA_450A6981940F",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 11, 12)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FC98319_1958_2956_4196_CBA8074C59EE",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 12, 13)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0802CAB5_19C8_3B5E_4187_BC5160E152B9",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 13, 14)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0C86AEAA_19C8_3B4A_41B5_B1E69E4CE452",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 14, 15)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10A6D471_1938_2FD6_41B2_3252EB8FC130",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 15, 16)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10988EBF_1938_FB4A_41AF_3047DFC2BAFF",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 16, 17)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10991D4C_1938_39CE_41B6_8C732A355A9E",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 17, 18)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10995E3F_193B_FB49_41AB_711E828E5B3D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 18, 19)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "start": "this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 19, this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247)",
    "media": "this.panorama_109ECB1D_1938_F949_419B_6BBDA6838247",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 19, 20)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109964A7_1938_6F7A_41A2_4C0B52C960D7",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 20, 21)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1099D97F_1938_19CA_41AD_212C3809B1AC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 21, 22)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0E3463B5_1A39_75D5_41B0_D28D9E31F349",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 22, 23)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0FAB3919_1A3B_32DC_41A7_CE264D09195C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 23, 24)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_109AECCB_1938_38CA_4188_EBBE58E08CEA",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 24, 25)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0E30DD68_1A09_6D7B_41B8_1A612E99B6C1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 25, 26)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_10A71934_1938_195E_41B3_0309FAD7BA52",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 26, 27)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1098E60C_1938_EB4E_419D_A499CEAB628C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 27, 28)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1261F0CE_1F39_D56B_41BA_8E6692A63DCD",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 28, 29)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_16C47114_1AB4_B8DF_417B_983A1AA613CC",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 29, 30)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_142A2E7E_1AD4_494B_41A5_7770F42E06E0",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 30, 31)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1099382C_193B_E74E_4194_4648FBC8CA15",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 31, 32)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0A2E4864_1AFC_497F_4182_F8C6000A407D",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 32, 33)",
    "class": "PanoramaPlayListItem"
   },
   {
    "camera": "this.panorama_1099859C_1938_294F_41AA_B658622986F1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1099859C_1938_294F_41AA_B658622986F1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 33, 34)",
    "class": "PanoramaPlayListItem"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 34, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 34, this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A)",
    "media": "this.video_8B678B38_87F9_7F99_41DA_4050DE3A575A",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 34, 35)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 35, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 35, this.video_0E928F34_038D_B7E6_415C_D046B5012510)",
    "media": "this.video_0E928F34_038D_B7E6_415C_D046B5012510",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 35, 36)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 36, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 36, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46)",
    "media": "this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 36, 37)"
   },
   {
    "player": "this.MainViewerPhotoAlbumPlayer",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist, 37, 0)",
    "media": "this.album_4B29E45B_4687_0A4A_41CB_46B35037E405",
    "class": "PhotoAlbumPlayListItem"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_9D80311C_8DE1_9D78_41DF_0CAAF0EE63A6",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid9DC230DE_8DE1_9CF9_41CA_9BD8E7B78CEDVideoPlayer",
     "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
     "displayPlaybackBar": true,
     "viewerArea": {
      "paddingLeft": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipBorderSize": 1,
      "toolTipPaddingLeft": 6,
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "playbackBarBottom": 0,
      "toolTipDisplayTime": 600,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadWidth": 6,
      "toolTipFontColor": "#606060",
      "class": "ViewerArea",
      "playbackBarRight": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontFamily": "Arial",
      "toolTipOpacity": 1,
      "progressBarBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipPaddingRight": 6,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderRadius": 0,
      "borderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderRadius": 0,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "minWidth": 100,
      "paddingBottom": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "progressLeft": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "width": "100%",
      "toolTipFontStyle": "normal",
      "playbackBarBorderSize": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 10,
      "height": "100%",
      "paddingRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "transitionDuration": 500,
      "propagateClick": false,
      "progressOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "shadow": false,
      "id": "viewer_uid9E527434_8DE0_9B48_41DA_3E79B50B985D",
      "toolTipShadowColor": "#333333",
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarLeft": 0,
      "borderRadius": 0,
      "transitionMode": "blending"
     }
    },
    "start": "this.viewer_uid9DC230DE_8DE1_9CF9_41CA_9BD8E7B78CEDVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9D80311C_8DE1_9D78_41DF_0CAAF0EE63A6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9D80311C_8DE1_9D78_41DF_0CAAF0EE63A6, 0, this.video_0E928F34_038D_B7E6_415C_D046B5012510)",
    "media": "this.video_0E928F34_038D_B7E6_415C_D046B5012510",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9DC230DE_8DE1_9CF9_41CA_9BD8E7B78CEDVideoPlayer)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_9D80A11C_8DE1_9D78_4156_E693C93038EC",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "id": "viewer_uid9DCD10E5_8DE1_9CC8_41C6_468E762F104EVideoPlayer",
     "buttonPause": "this.Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
     "displayPlaybackBar": true,
     "viewerArea": {
      "paddingLeft": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBarBorderColor": "#000000",
      "toolTipShadowOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "toolTipBorderSize": 1,
      "toolTipPaddingLeft": 6,
      "playbackBarHeadOpacity": 1,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "playbackBarBottom": 0,
      "toolTipDisplayTime": 600,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipShadowSpread": 0,
      "playbackBarHeight": 10,
      "playbackBarHeadWidth": 6,
      "toolTipFontColor": "#606060",
      "class": "ViewerArea",
      "playbackBarRight": 0,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipFontFamily": "Arial",
      "toolTipOpacity": 1,
      "progressBarBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipPaddingRight": 6,
      "toolTipPaddingTop": 4,
      "playbackBarProgressBorderRadius": 0,
      "borderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderRadius": 0,
      "minHeight": 50,
      "playbackBarHeadBorderRadius": 0,
      "minWidth": 100,
      "paddingBottom": 0,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "progressLeft": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarProgressOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipBorderRadius": 3,
      "width": "100%",
      "toolTipFontStyle": "normal",
      "playbackBarBorderSize": 0,
      "progressBottom": 2,
      "toolTipFontSize": 12,
      "playbackBarBackgroundOpacity": 1,
      "progressHeight": 10,
      "height": "100%",
      "paddingRight": 0,
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "transitionDuration": 500,
      "propagateClick": false,
      "progressOpacity": 1,
      "toolTipTextShadowBlurRadius": 3,
      "progressBarBackgroundColorDirection": "vertical",
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadow": true,
      "shadow": false,
      "id": "viewer_uid9E2DC438_8DE0_9BB8_41D9_DF2E6EC5ADCB",
      "toolTipShadowColor": "#333333",
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipTextShadowColor": "#000000",
      "playbackBarOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBarOpacity": 1,
      "toolTipPaddingBottom": 4,
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarLeft": 0,
      "borderRadius": 0,
      "transitionMode": "blending"
     }
    },
    "start": "this.viewer_uid9DCD10E5_8DE1_9CC8_41C6_468E762F104EVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_9D80A11C_8DE1_9D78_4156_E693C93038EC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_9D80A11C_8DE1_9D78_4156_E693C93038EC, 0, this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46)",
    "media": "this.video_0DF3228A_0396_AEA2_4170_E28BA043FB46",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid9DCD10E5_8DE1_9CC8_41C6_468E762F104EVideoPlayer)"
   }
  ]
 },
 "this.popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A",
 {
  "levels": [
   {
    "height": 2480,
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_0.png",
    "width": 3508,
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_1.png",
    "width": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "url": "media/popup_57DC1C88_469C_FAB7_41B3_6E1DFAA4C25A_0_3.png",
    "width": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_49BCA3A4_469F_0EFE_41D0_04BEB03F9865",
  "class": "ImageResource"
 },
 {
  "paddingLeft": 0,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "modal": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 0,
  "shadowVerticalLength": 0,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 5,
  "backgroundColorRatios": [],
  "closeButtonIconColor": "#000000",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowHorizontalLength": 3,
  "scrollBarWidth": 10,
  "class": "Window",
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "closeButtonBorderRadius": 0,
  "children": [
   "this.viewer_uid9E527434_8DE0_9B48_41DA_3E79B50B985D"
  ],
  "bodyPaddingLeft": 0,
  "minHeight": 20,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "paddingBottom": 0,
  "closeButtonPressedIconColor": "#888888",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "backgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "contentOpaque": false,
  "headerPaddingLeft": 10,
  "headerPaddingRight": 0,
  "closeButtonPaddingBottom": 5,
  "paddingRight": 0,
  "headerBackgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconColor": "#666666",
  "propagateClick": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "shadow": true,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonIconWidth": 20,
  "id": "window_87D7CD2C_8DE0_E559_41BA_E995E767EF44",
  "creationPolicy": "delayed",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "headerVerticalAlign": "middle",
  "close": "this.PlayList_9D80311C_8DE1_9D78_41DF_0CAAF0EE63A6.set('selectedIndex', -1);",
  "closeButtonBorderColor": "#000000",
  "closeButtonBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundOpacity": 0,
  "layout": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPaddingRight": 5,
  "bodyPaddingTop": 0,
  "data": {
   "name": "Window381"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5
 },
 "this.popup_577B9DF6_468F_3A5A_41C5_27F4B9282923",
 "this.popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD",
 {
  "levels": [
   {
    "height": 2480,
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_0.png",
    "width": 3508,
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_1.png",
    "width": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "url": "media/popup_549EEDA5_4683_1AF9_41B1_B76CBE21C2BD_0_3.png",
    "width": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_54C5AA0C_4683_39CE_41CF_2A26B5A16BF5",
  "class": "ImageResource"
 },
 "this.popup_452C6691_4AB3_DC98_41B9_E112963125A7",
 {
  "levels": [
   {
    "height": 2480,
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_0.png",
    "width": 3508,
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_1.png",
    "width": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "url": "media/popup_452C6691_4AB3_DC98_41B9_E112963125A7_0_3.png",
    "width": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_5B484BFF_4B53_5488_41CB_0210827413D8",
  "class": "ImageResource"
 },
 {
  "paddingLeft": 0,
  "closeButtonPressedBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowOpacity": 0.5,
  "backgroundColor": [],
  "gap": 10,
  "bodyBackgroundColorDirection": "vertical",
  "overflow": "scroll",
  "modal": true,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "titlePaddingBottom": 5,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 0,
  "shadowVerticalLength": 0,
  "footerHeight": 5,
  "closeButtonIconLineWidth": 5,
  "backgroundColorRatios": [],
  "closeButtonIconColor": "#000000",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titleFontSize": 14,
  "shadowBlurRadius": 6,
  "shadowHorizontalLength": 3,
  "scrollBarWidth": 10,
  "class": "Window",
  "scrollBarOpacity": 0.5,
  "bodyPaddingRight": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titlePaddingLeft": 5,
  "borderSize": 0,
  "horizontalAlign": "center",
  "shadowColor": "#000000",
  "backgroundOpacity": 1,
  "headerBackgroundColorDirection": "vertical",
  "shadowSpread": 1,
  "closeButtonBorderRadius": 0,
  "children": [
   "this.viewer_uid9E2DC438_8DE0_9BB8_41D9_DF2E6EC5ADCB"
  ],
  "bodyPaddingLeft": 0,
  "minHeight": 20,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "titlePaddingTop": 5,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilShowEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "minWidth": 20,
  "paddingBottom": 0,
  "closeButtonPressedIconColor": "#888888",
  "veilHideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonIconHeight": 20,
  "footerBackgroundColorDirection": "vertical",
  "veilOpacity": 0.4,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "closeButtonPressedBackgroundOpacity": 0.3,
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonPressedIconLineWidth": 5,
  "closeButtonBackgroundOpacity": 0.3,
  "closeButtonPaddingTop": 5,
  "backgroundColorDirection": "vertical",
  "headerPaddingBottom": 5,
  "contentOpaque": false,
  "headerPaddingLeft": 10,
  "headerPaddingRight": 0,
  "closeButtonPaddingBottom": 5,
  "paddingRight": 0,
  "headerBackgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "headerPaddingTop": 10,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "hideEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeOutEffect"
  },
  "closeButtonRollOverBorderSize": 0,
  "closeButtonRollOverIconColor": "#666666",
  "propagateClick": false,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "shadow": true,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "closeButtonIconWidth": 20,
  "id": "window_87D5CD29_8DE0_E55B_41C4_2CEAD1AFC870",
  "creationPolicy": "delayed",
  "scrollBarMargin": 2,
  "bodyBackgroundOpacity": 0,
  "closeButtonPaddingLeft": 5,
  "scrollBarVisible": "rollOver",
  "showEffect": {
   "duration": 500,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "titlePaddingRight": 5,
  "headerVerticalAlign": "middle",
  "close": "this.PlayList_9D80A11C_8DE1_9D78_4156_E693C93038EC.set('selectedIndex', -1);",
  "closeButtonBorderColor": "#000000",
  "closeButtonBorderSize": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "footerBackgroundOpacity": 0,
  "layout": "vertical",
  "veilColorRatios": [
   0,
   1
  ],
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontFamily": "Arial",
  "closeButtonPaddingRight": 5,
  "bodyPaddingTop": 0,
  "data": {
   "name": "Window380"
  },
  "closeButtonRollOverIconLineWidth": 5,
  "borderRadius": 5
 },
 "this.popup_456D0585_4AB2_DD78_41D0_1B743B283D0B",
 "this.popup_4B62590E_5BEB_B4FD_41C6_6250545A457D",
 {
  "levels": [
   {
    "height": 2480,
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_0.png",
    "width": 3508,
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_1.png",
    "width": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "url": "media/popup_4B62590E_5BEB_B4FD_41C6_6250545A457D_0_3.png",
    "width": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_4B2C9681_5BEB_5DE7_41C7_CD0942C11FE6",
  "class": "ImageResource"
 },
 {
  "autoplay": true,
  "class": "MediaAudio",
  "id": "audio_44BB5482_4B52_B378_41C8_965C66C5ADC7",
  "data": {
   "label": "Lab multimedia-enhanced-v2"
  },
  "audio": {
   "oggUrl": "media/audio_44BB5482_4B52_B378_41C8_965C66C5ADC7.ogg",
   "mp3Url": "media/audio_44BB5482_4B52_B378_41C8_965C66C5ADC7.mp3",
   "class": "AudioResource"
  }
 },
 "this.popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B",
 {
  "levels": [
   {
    "height": 2480,
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_0.png",
    "width": 3508,
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_1.png",
    "width": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "url": "media/popup_545E9110_5BD4_D4E5_41D0_E4E68C6B2E5B_0_3.png",
    "width": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_54D3887E_5BD5_551D_41B3_5A4B9DA66396",
  "class": "ImageResource"
 },
 "this.popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78",
 {
  "levels": [
   {
    "height": 2480,
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_0.png",
    "width": 3508,
    "class": "ImageResourceLevel"
   },
   {
    "height": 1447,
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_1.png",
    "width": 2048,
    "class": "ImageResourceLevel"
   },
   {
    "height": 723,
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel"
   },
   {
    "height": 361,
    "url": "media/popup_4A033AEE_5BEB_553D_41D5_7557A1CE4C78_0_3.png",
    "width": 512,
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_64A49399_6A8F_767C_41D1_43AD00694F38",
  "class": "ImageResource"
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99FBD4CE_8DE0_A4D8_41D5_16805EA9BA72",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 106.5,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99F184E6_8DE0_A4C8_41DB_DD4BD2CA36F1",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -6.21,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99C884FD_8DE0_A4BB_41DB_2E6BBFF0848C",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 123.37,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99DE3515_8DE0_A548_41B7_D182115B1410",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -149.49,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99D4D52E_8DE0_A559_41DF_2E3CB0300BFE",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -170.91,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99AA2547_8DE0_A5C8_41B7_92E3C581B012",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 95.47,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99BEC55E_8DE0_A5F8_41D1_14BCA4759A46",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 157.15,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_99B5A57A_8DE0_A5B9_41E0_7DC6624132A2",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 15.56,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_998B1593_8DE0_A54F_41A6_6736BDE238D8",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -99.75,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_998195AD_8DE0_A55B_41D4_A46E31A1EDA3",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 35.15,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9996F5C4_8DE0_A4C9_41D7_441695DE6D6F",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -102.54,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_996DE5DC_8DE0_A4F9_41DE_BF68F9B41A3D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 36.68,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_996335F3_8DE0_A4CF_41CF_56672EAFB885",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -19.44,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9976460B_8DE0_A75F_41CF_E20A3A87B10D",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -75.91,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_994BA622_8DE0_A749_41CC_ECBB4C217B7A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -31.46,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_995F463A_8DE0_A7B9_41BF_01B1A7673C5A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -98.17,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9954A653_8DE0_A7C8_417B_DC51FEE43705",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -35.55,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9928166A_8DE0_A7D9_41BF_4E5C4895A7A7",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -25.76,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "manualRotationSpeed": 268,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 1,
  "id": "camera_993AA683_8DE0_A748_41D3_D9FC3B2CE9DD",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 39.88,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_990D269B_8DE0_A778_41E0_D23091D0F6EB",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 20.11,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_991D96B3_8DE0_A74F_41C1_29E774F838F2",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 92.93,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_991016CB_8DE0_A4D8_41DC_BA49905ABA57",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -84.22,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D85D77E_8DE0_A5B9_4189_32A6CD4DDE6E",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -147.02,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D814795_8DE0_A548_41AF_9F57EFAE89DC",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 95.82,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "manualRotationSpeed": 222,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D9B47AD_8DE0_A558_41D9_9091330AF7E5",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -62.96,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D9557C5_8DE0_A4CB_41DF_44697350DFF8",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 147.16,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D9087DE_8DE0_A4F9_41D8_76846C0E494A",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 69.6,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D6AB7F7_8DE0_A4B7_41DD_E1F51F7EA8A0",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 136.38,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D65B810_8DE0_AB49_41DD_02A92814BCB8",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -176.4,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D7F7827_8DE0_AB48_41DE_84A2C3FFEEEC",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -93.58,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D7A6840_8DE0_ABC9_41E1_9D6BBAB2215C",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": 90.88,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_9D743857_8DE0_ABF7_41D8_4A1B117F11DD",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "easing": "linear",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement"
    }
   ]
  },
  "initialPosition": {
   "yaw": -49.76,
   "pitch": 0,
   "class": "PanoramaCameraPosition"
  }
 },
 {
  "duration": 1000,
  "id": "effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_58006734_4BB1_5D98_41CF_317A7496F898",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "this.effect_58006734_4BB1_5D98_41CF_317A7496F898",
 {
  "duration": 1000,
  "id": "effect_9D738859_8DE0_ABFB_41D7_61D7F72CB530",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 {
  "duration": 1000,
  "id": "effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB",
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 {
  "duration": 1000,
  "id": "effect_4B8170AA_5BFB_7525_41BC_6FD71250837C",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "this.effect_5AE82ECD_4BB3_4C88_41D2_A77CD75AFB38",
 "this.effect_5AE81ECD_4BB3_4C88_41AB_289C73C5848C",
 "this.effect_5AE80ECD_4BB3_4C88_4136_CB4E9BA8A372",
 "this.effect_5AE8EECD_4BB3_4C88_41C4_7641764852BA",
 "this.effect_5AE8CECD_4BB3_4C88_41D1_4F44EDD2121F",
 "this.effect_5AE8BECD_4BB3_4C88_41BD_AFCD06D2160A",
 "this.effect_5AE97ECD_4BB3_4C88_41CE_06C54EF7B617",
 "this.effect_5AE95ECE_4BB3_4C88_41CE_092F4F302938",
 "this.effect_5AEBDECE_4BB3_4C88_41D1_260E9AD558DE",
 "this.effect_5AEBCECE_4BB3_4C88_41CB_81F4AC76BF3D",
 "this.effect_5AEBBECE_4BB3_4C88_41CC_67CB25DF731E",
 "this.effect_5AEBAECE_4BB3_4C88_41BD_374F92FCEEAD",
 "this.effect_5AEB9ECE_4BB3_4C88_41CE_8B02800BD915",
 "this.effect_5AEB8ECE_4BB3_4C88_41AB_AB1ADFB04925",
 "this.effect_5AE86ECE_4BB3_4C88_41BA_296838D20AD3",
 "this.effect_5AE85ECE_4BB3_4C88_41D0_D6F60BE6E634",
 "this.effect_5AE83ECF_4BB3_4C88_41CB_580655F08EA6",
 "this.effect_5AE82ECF_4BB3_4C88_416B_E33555FDC9DC",
 "this.effect_5AE81ECF_4BB3_4C88_41C3_6B8E2B667B95",
 "this.effect_5AE8FECF_4BB3_4C88_41CD_3584FB70B9A0",
 "this.effect_58006734_4BB1_5D98_41CF_317A7496F898",
 "this.effect_58006734_4BB1_5D98_41CF_317A7496F898",
 {
  "duration": 1000,
  "id": "effect_9D724860_8DE0_ABC9_41D0_D3B48A2B8498",
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "this.effect_4B8160A9_5BFB_7526_41D2_6BFF135623FB",
 "this.effect_4B8170AA_5BFB_7525_41BC_6FD71250837C"
], "children": [
 {
  "paddingLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipShadowOpacity": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "playbackBarBottom": 5,
  "toolTipDisplayTime": 600,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipBorderColor": "#000000",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeight": 10,
  "playbackBarHeadWidth": 6,
  "toolTipFontColor": "#FFFFFF",
  "class": "ViewerArea",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontFamily": "Arial",
  "toolTipOpacity": 1,
  "progressBarBorderSize": 0,
  "toolTipFontWeight": "normal",
  "toolTipPaddingRight": 6,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "progressBarBorderRadius": 0,
  "toolTipBackgroundColor": "transparent",
  "playbackBarBorderRadius": 0,
  "minHeight": 50,
  "playbackBarHeadBorderRadius": 0,
  "minWidth": 100,
  "paddingBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressLeft": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipBorderRadius": 0,
  "width": "100%",
  "toolTipFontStyle": "normal",
  "playbackBarBorderSize": 0,
  "progressBottom": 0,
  "toolTipFontSize": 24,
  "playbackBarBackgroundOpacity": 1,
  "progressHeight": 10,
  "height": "100%",
  "paddingRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "transitionDuration": 500,
  "propagateClick": false,
  "progressOpacity": 1,
  "toolTipTextShadowBlurRadius": 0,
  "top": 0,
  "toolTipShadowBlurRadius": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "id": "MainViewer",
  "toolTipShadowColor": "#000000",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipTextShadowColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "playbackBarLeft": 0,
  "borderRadius": 0,
  "transitionMode": "fade_out_fade_in",
  "left": 0
 },
 {
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "pressedIconURL": "skin/IconButton_5B5900F0_4B51_D498_4190_2794D2688452_pressed.png",
  "right": "3%",
  "minWidth": 0,
  "paddingBottom": 0,
  "mode": "toggle",
  "verticalAlign": "middle",
  "width": 40,
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 40,
  "transparencyActive": true,
  "iconURL": "skin/IconButton_5B5900F0_4B51_D498_4190_2794D2688452.png",
  "propagateClick": false,
  "cursor": "hand",
  "top": "5.2%",
  "class": "IconButton",
  "id": "IconButton_5B5900F0_4B51_D498_4190_2794D2688452",
  "shadow": false,
  "data": {
   "name": "Mute"
  },
  "borderSize": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 0
 },
 {
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "pressedIconURL": "skin/IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714_pressed.png",
  "right": "11.92%",
  "minWidth": 0,
  "paddingBottom": 0,
  "rollOverIconURL": "skin/IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714_rollover.png",
  "mode": "push",
  "verticalAlign": "middle",
  "width": 32,
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 32,
  "transparencyActive": true,
  "iconURL": "skin/IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714.png",
  "propagateClick": false,
  "cursor": "hand",
  "top": "25.43%",
  "class": "IconButton",
  "id": "IconButton_5B5930F0_4B51_D498_4179_27ABAEDB9714",
  "shadow": false,
  "data": {
   "name": "Zoom +"
  },
  "borderSize": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 0
 },
 {
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "pressedIconURL": "skin/IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656_pressed.png",
  "right": "11.79%",
  "minWidth": 0,
  "paddingBottom": 0,
  "rollOverIconURL": "skin/IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656_rollover.png",
  "mode": "push",
  "verticalAlign": "middle",
  "width": 32,
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 32,
  "transparencyActive": true,
  "iconURL": "skin/IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656.png",
  "propagateClick": false,
  "cursor": "hand",
  "top": "33.48%",
  "class": "IconButton",
  "id": "IconButton_5B5A60EF_4B51_D488_415A_524E07DD0656",
  "shadow": false,
  "data": {
   "name": "Zoom -"
  },
  "borderSize": 0,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 0
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Pause"
  },
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconWidth": 40,
  "fontSize": 12,
  "mode": "toggle",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 58,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 58,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "9.05%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5B802D21_4B53_CDB8_41D0_E2F2488AC464",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "horizontalAlign": "center",
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "borderSize": 0,
  "shadowSpread": 1,
  "left": "47.11%",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Move Right"
  },
  "right": "44.51%",
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconURL": "skin/Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D_rollover.png",
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 40.65,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "rollOverIconWidth": 40,
  "height": 41.75,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "10.2%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5BAA861E_4B4E_DF88_41A6_4CBB4DE5A42D",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "borderSize": 0,
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Move Left"
  },
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconURL": "skin/Button_5B8D543D_4B4F_B388_41B6_AD893F62387B_rollover.png",
  "rollOverIconWidth": 40,
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5B8D543D_4B4F_B388_41B6_AD893F62387B_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 38.4,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 37.6,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5B8D543D_4B4F_B388_41B6_AD893F62387B.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "10.78%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5B8D543D_4B4F_B388_41B6_AD893F62387B",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "horizontalAlign": "center",
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "borderSize": 0,
  "shadowSpread": 1,
  "left": "43.32%",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Move Up"
  },
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconURL": "skin/Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718_rollover.png",
  "rollOverIconWidth": 40,
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 40,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 43.3,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "19.4%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5B8699CC_4BB1_B488_41C9_15DDC41D6718",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "horizontalAlign": "center",
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "borderSize": 0,
  "shadowSpread": 1,
  "left": "47.8%",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Move Down"
  },
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconURL": "skin/Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED_rollover.png",
  "rollOverIconWidth": 40,
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 40,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 40,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "1.58%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5B8F9219_4BB7_B788_41A8_D08C18CDB5ED",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "horizontalAlign": "center",
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "borderSize": 0,
  "shadowSpread": 1,
  "left": "47.99%",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Speed Left"
  },
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconURL": "skin/Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8_rollover.png",
  "rollOverIconWidth": 40,
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 40,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "height": 40,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "10.32%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5BE4AE44_4BB1_CFF8_41C0_A066D00F6EC8",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "horizontalAlign": "center",
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "borderSize": 0,
  "shadowSpread": 1,
  "left": "38.39%",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "fontWeight": "normal",
  "pressedBackgroundOpacity": 0,
  "backgroundOpacity": 0,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "Speed Right"
  },
  "right": "39.72%",
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#5794FE",
   "#0065CD"
  ],
  "rollOverIconURL": "skin/Button_5BF55C76_4BB3_5398_41CA_6741290B2B45_rollover.png",
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "rollOverBackgroundOpacity": 0,
  "gap": 0,
  "pressedIconURL": "skin/Button_5BF55C76_4BB3_5398_41CA_6741290B2B45_pressed.png",
  "textDecoration": "none",
  "pressedIconHeight": 40,
  "width": 40,
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "rollOverIconWidth": 40,
  "height": 40,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   1
  ],
  "iconURL": "skin/Button_5BF55C76_4BB3_5398_41CA_6741290B2B45.png",
  "propagateClick": false,
  "cursor": "hand",
  "bottom": "10.26%",
  "borderColor": "#000000",
  "shadowBlurRadius": 6,
  "class": "Button",
  "id": "Button_5BF55C76_4BB3_5398_41CA_6741290B2B45",
  "shadow": false,
  "shadowColor": "#000000",
  "pressedIconWidth": 40,
  "iconWidth": 40,
  "iconHeight": 40,
  "borderSize": 0,
  "rollOverIconHeight": 40,
  "iconBeforeLabel": true,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 },
 {
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "backgroundOpacity": 0,
  "right": "1.22%",
  "minWidth": 1,
  "paddingBottom": 0,
  "toolTipTextShadowOpacity": 0,
  "mode": "toggle",
  "toolTipShadowVerticalLength": 0,
  "verticalAlign": "middle",
  "toolTipShadowOpacity": 1,
  "width": 61,
  "toolTipBorderSize": 1,
  "height": 49,
  "toolTipPaddingLeft": 6,
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "paddingRight": 0,
  "toolTipDisplayTime": 600,
  "toolTipBorderRadius": 3,
  "transparencyActive": true,
  "iconURL": "skin/IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2.png",
  "toolTipBorderColor": "#767676",
  "propagateClick": false,
  "toolTipShadowSpread": 0,
  "maxWidth": 128,
  "cursor": "hand",
  "toolTipTextShadowBlurRadius": 3,
  "top": "28.33%",
  "maxHeight": 128,
  "toolTipFontColor": "#606060",
  "toolTipPaddingRight": 6,
  "class": "IconButton",
  "id": "IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2",
  "toolTipOpacity": 1,
  "toolTipShadowColor": "#333333",
  "shadow": false,
  "toolTipFontFamily": "Arial",
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "toolTip": "Fullscreen",
  "toolTipPaddingTop": 4,
  "data": {
   "name": "Full Screen"
  },
  "borderSize": 0,
  "toolTipPaddingBottom": 4,
  "toolTipFontWeight": "normal",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "minHeight": 1,
  "toolTipFontSize": 12
 },
 {
  "paddingLeft": 20,
  "scrollBarMargin": 2,
  "itemPaddingLeft": 3,
  "itemThumbnailOpacity": 1,
  "itemThumbnailShadowSpread": 1,
  "minWidth": 1,
  "paddingBottom": 10,
  "data": {
   "name": "ThumbnailList35762"
  },
  "verticalAlign": "top",
  "gap": 13,
  "itemLabelHorizontalAlign": "center",
  "itemVerticalAlign": "middle",
  "borderRadius": 5,
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadowColor": "#000000",
  "itemPaddingTop": 3,
  "itemMode": "normal",
  "itemThumbnailShadowVerticalLength": 3,
  "height": 124.2,
  "itemLabelPosition": "bottom",
  "rollOverItemLabelFontWeight": "bold",
  "itemPaddingRight": 3,
  "paddingTop": 10,
  "paddingRight": 20,
  "itemThumbnailShadowBlurRadius": 8,
  "itemThumbnailScaleMode": "fit_outside",
  "width": "34.914%",
  "itemHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "scrollBarColor": "#FFFFFF",
  "selectedItemLabelFontColor": "#FFCC00",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelFontFamily": "Arial",
  "itemBackgroundColorDirection": "vertical",
  "itemLabelFontSize": 14,
  "itemOpacity": 1,
  "scrollBarOpacity": 0.5,
  "itemBackgroundOpacity": 0,
  "bottom": "3.16%",
  "itemThumbnailBorderRadius": 5,
  "itemLabelGap": 8,
  "itemBorderRadius": 0,
  "selectedItemLabelFontWeight": "bold",
  "class": "ThumbnailList",
  "id": "ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71",
  "scrollBarWidth": 10,
  "propagateClick": false,
  "shadow": false,
  "itemThumbnailShadow": true,
  "itemLabelFontColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "itemThumbnailWidth": 100,
  "itemThumbnailHeight": 75,
  "layout": "horizontal",
  "borderSize": 0,
  "horizontalAlign": "left",
  "itemPaddingBottom": 3,
  "itemThumbnailShadowOpacity": 0.57,
  "minHeight": 1,
  "itemBackgroundColorRatios": [],
  "left": "0.02%",
  "itemBackgroundColor": [],
  "backgroundOpacity": 0,
  "playList": "this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist",
  "itemLabelFontStyle": "normal"
 },
 {
  "paddingLeft": 0,
  "backgroundOpacity": 0.55,
  "right": 0,
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [
   0
  ],
  "propagateClick": false,
  "bottom": 0,
  "top": 0,
  "class": "UIComponent",
  "id": "veilPopupPanorama",
  "shadow": false,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "data": {
   "name": "UIComponent4344"
  },
  "borderSize": 0,
  "visible": false,
  "left": 0,
  "borderRadius": 0,
  "minHeight": 0
 },
 {
  "paddingLeft": 0,
  "backgroundOpacity": 1,
  "right": 0,
  "minWidth": 0,
  "paddingBottom": 0,
  "backgroundColor": [],
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "paddingRight": 0,
  "backgroundColorRatios": [],
  "scaleMode": "custom",
  "propagateClick": false,
  "bottom": 0,
  "top": 0,
  "class": "ZoomImage",
  "id": "zoomImagePopupPanorama",
  "shadow": false,
  "data": {
   "name": "ZoomImage4345"
  },
  "borderSize": 0,
  "visible": false,
  "left": 0,
  "borderRadius": 0,
  "minHeight": 0
 },
 {
  "paddingLeft": 5,
  "fontWeight": "normal",
  "backgroundOpacity": 0.3,
  "fontColor": "#FFFFFF",
  "data": {
   "name": "CloseButton4346"
  },
  "borderColor": "#000000",
  "right": 10,
  "minWidth": 0,
  "paddingBottom": 5,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "fontSize": 12,
  "mode": "push",
  "verticalAlign": "middle",
  "gap": 5,
  "iconLineWidth": 5,
  "textDecoration": "none",
  "backgroundColorDirection": "vertical",
  "paddingTop": 5,
  "paddingRight": 5,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "propagateClick": false,
  "cursor": "hand",
  "fontStyle": "normal",
  "rollOverIconColor": "#666666",
  "top": 10,
  "shadowBlurRadius": 6,
  "class": "CloseButton",
  "id": "closeButtonPopupPanorama",
  "shadow": false,
  "shadowColor": "#000000",
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "iconBeforeLabel": true,
  "iconWidth": 20,
  "iconHeight": 20,
  "borderSize": 0,
  "label": "",
  "pressedIconColor": "#888888",
  "iconColor": "#000000",
  "visible": false,
  "shadowSpread": 1,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "minHeight": 0,
  "layout": "horizontal"
 }
], 
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarVisible": "rollOver",
 "buttonToggleFullscreen": "this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2",
 "overflow": "visible",
 "minWidth": 20,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "start": "this.syncPlaylists([this.ThumbnailList_4A59D1B3_5BF7_D72B_41C1_86BFE2F1EC71_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5BCE2EEB_4BB1_CC88_41CC_C8E43F6481F2].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "gap": 10,
 "contentOpaque": false,
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_5B5900F0_4B51_D498_4190_2794D2688452",
 "paddingTop": 0,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); }
 },
 "mobileMipmappingEnabled": false,
 "height": "100%",
 "paddingRight": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "id": "rootPlayer",
 "creationPolicy": "delayed",
 "shadow": false,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "borderSize": 0,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "minHeight": 20,
 "data": {
  "name": "Player431"
 }
})