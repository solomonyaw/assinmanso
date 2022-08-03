TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMax": 120,
  "audios": [
   {
    "audio": {
     "mp3Url": "media/audio_6A8E9769_651C_0A74_41B8_803C6632635A.mp3",
     "id": "audioresource_7517626B_651C_0A74_41C2_9342E7219503",
     "class": "AudioResource",
     "oggUrl": "media/audio_6A8E9769_651C_0A74_41B8_803C6632635A.ogg"
    },
    "id": "audio_6A8E9769_651C_0A74_41B8_803C6632635A",
    "class": "PanoramaAudio",
    "autoplay": true
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMax": 120,
     "audios": [
      {
       "audio": "this.audioresource_7517626B_651C_0A74_41C2_9342E7219503",
       "id": "audio_7517726B_651C_0A74_41B3_55BFAAE3E3BB",
       "class": "PanoramaAudio",
       "autoplay": true
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929",
       "yaw": -14.33,
       "distance": 1,
       "backwardYaw": -29.9
      }
     ],
     "hfov": 360,
     "id": "panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3",
     "class": "Panorama",
     "pitch": 0,
     "hfovMin": 60,
     "thumbnailUrl": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_t.jpg",
     "label": "RIVER2",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_t.jpg",
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_6A07B706_64E4_0BBC_41D4_4D25213FA158",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 22.71,
           "yaw": -14.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 188,
              "width": 200,
              "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_0_HS_0_1_0_map.gif"
             }
            ]
           },
           "pitch": -1.13
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "yaw": -14.33,
           "hfov": 22.71,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 387,
              "width": 411,
              "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -1.13
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_6BBCDF31_64E4_1BD4_41CF_4A474129A08E",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17,
           "yaw": -10.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 16,
              "width": 17,
              "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_0_HS_1_0_map.gif"
             }
            ]
           },
           "pitch": -8.7
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -10.85,
           "hfov": 17,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 278,
              "width": 307,
              "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -8.7
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_75F15C88_64E4_1EB5_41BB_35C19C1EB018",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929, this.camera_7613213E_6524_07CC_41C0_C45AEC4A232E); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.22,
           "yaw": -14.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 153,
              "width": 172,
              "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": 3.17
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -14.33,
           "hfov": 19.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 307,
              "width": 344,
              "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 3.17
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3.jpeg"
         }
        ]
       }
      }
     ],
     "partial": false,
     "vfov": 180
    },
    "yaw": -29.9,
    "distance": 1,
    "backwardYaw": -14.33
   }
  ],
  "hfov": 360,
  "id": "panorama_6F45F105_64E4_07BC_41C3_B033578E7929",
  "class": "Panorama",
  "pitch": 0,
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_t.jpg",
  "label": "RIVER1",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_69F1E0BF_64E4_06CB_41D9_127884AB1F44",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 22.07,
        "yaw": -28.26,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 179,
           "width": 195,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_0_1_0_map.gif"
          }
         ]
        },
        "pitch": 6.45
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "yaw": -28.26,
        "hfov": 22.07,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 359,
           "width": 390,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 6.45
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_69953F9F_64E4_1ACC_41A5_3751F5BC4245",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.88,
        "yaw": -25.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 32,
           "width": 16,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_1_0_map.gif"
          }
         ]
        },
        "pitch": -7.88
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -25.39,
        "hfov": 19.88,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 716,
           "width": 350,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -7.88
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_69D0EE59_64FC_7A54_41CA_C52F05AB4395",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3, this.camera_76096110_6524_07D4_41C3_F4CA27906C1F); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 24.67,
        "yaw": -29.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 147,
           "width": 200,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 9.11
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -29.9,
        "hfov": 24.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 322,
           "width": 436,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 9.11
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6A9BFFDC_64E3_FA4E_41D3_6C41CFDF752C",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6936F4C1_64E4_0EB4_41D5_A7A3E34955C0, {'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'borderColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','paddingBottom':5,'paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','iconHeight':20,'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconWidth':20,'paddingTop':5,'pressedIconHeight':20,'pressedIconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','rollOverIconWidth':20}) } else { this.showPopupMedia(this.window_6ACF3639_64E4_0DD4_41C2_4CB76CA4B6B7, this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1, this.PlayList_75557AB8_651C_FAD4_41D4_D95BD9170B52, '70%', '70%', true, true); this.PlayList_75557AB8_651C_FAD4_41D4_D95BD9170B52.set('selectedIndex', 0); ; this.viewer_uid7535BA94_651C_FADD_41A9_38F380BDDB9AVideoPlayer.play();  }"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.19,
        "yaw": -152.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 185,
           "width": 169,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": 6.45
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "roll": 0,
        "yaw": -152.56,
        "hfov": 19.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 371,
           "width": 338,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 6.45
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6A428572_64E4_0E54_418A_2A80E00F9595",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 22.65,
        "yaw": -147.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 28,
           "width": 16,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_4_0_map.gif"
          }
         ]
        },
        "pitch": -14.03
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -147.85,
        "hfov": 22.65,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 716,
           "width": 408,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -14.03
       }
      ]
     },
     {
      "rotationX": 0,
      "popupMaxWidth": "70%",
      "yaw": -152.56,
      "showEasing": "cubic_in",
      "popupMaxHeight": "70%",
      "hfov": 19.53,
      "rotationZ": 0,
      "hideEasing": "cubic_out",
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1.mp4"
      },
      "autoplay": true,
      "id": "popup_6936F4C1_64E4_0EB4_41D5_A7A3E34955C0",
      "loop": false,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "showDuration": 500,
      "rotationY": 0,
      "pitch": 6.45
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6AAB5473_64E4_0E54_41C4_49A27242AA7E",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_6A5B10F8_64E4_0654_41CD_694EBF5D5B0D, {'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'borderColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','paddingBottom':5,'paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','iconHeight':20,'iconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedBorderSize':0,'iconColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'backgroundColorDirection':'vertical','backgroundOpacity':0.3,'rollOverIconHeight':20,'iconWidth':20,'paddingTop':5,'pressedIconHeight':20,'pressedIconWidth':20,'paddingRight':5,'rollOverBorderColor':'#000000','rollOverIconWidth':20}) } else { this.showPopupMedia(this.window_6BD66321_64E4_0BF4_41C6_2364A1C693B2, this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1, this.PlayList_75552AB8_651C_FAD4_41A4_F61C492A545E, '70%', '70%', true, true); this.PlayList_75552AB8_651C_FAD4_41A4_F61C492A545E.set('selectedIndex', 0); ; this.viewer_uid753A0A98_651C_FAD5_41D7_475284913F65VideoPlayer.play();  }"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 12.98,
        "yaw": -152.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 128,
           "width": 115,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_5_0_0_map.gif"
          }
         ]
        },
        "pitch": 10.55
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -152.92,
        "hfov": 12.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 257,
           "width": 230,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_5_0.png"
          }
         ]
        },
        "pitch": 10.55
       }
      ]
     },
     {
      "rotationX": 0,
      "popupMaxWidth": "70%",
      "yaw": -152.92,
      "showEasing": "cubic_in",
      "popupMaxHeight": "70%",
      "hfov": 12.98,
      "rotationZ": 0,
      "hideEasing": "cubic_out",
      "video": {
       "class": "VideoResource",
       "height": 360,
       "width": 640,
       "mp4Url": "media/video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1.mp4"
      },
      "autoplay": true,
      "id": "popup_6A5B10F8_64E4_0654_41CD_694EBF5D5B0D",
      "loop": false,
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "showDuration": 500,
      "rotationY": 0,
      "pitch": 10.55
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6BF1EC12_64E4_3DD5_41A0_55106D600F6E",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_69481A36_64EC_05DC_41AC_0D05A5C797B3, null, false)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 26.97,
        "yaw": 52.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 173,
           "width": 200,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_6_0_0_map.gif"
          }
         ]
        },
        "pitch": 8.91
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 52.35,
        "hfov": 26.97,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 415,
           "width": 477,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_6_0.png"
          }
         ]
        },
        "pitch": 8.91
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_6A4C2096_64E4_06DC_41D2_571336F633FD",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showWindow(this.window_744E92AC_6524_0ACC_41C7_3D1478A0879F, null, false)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.91,
        "yaw": 61.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 27,
           "width": 16,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_7_0_map.gif"
          }
         ]
        },
        "pitch": 2.35
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 61.64,
        "hfov": 13.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 415,
           "width": 243,
           "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_0_HS_7_0.png"
          }
         ]
        },
        "pitch": 2.35
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 3148,
       "width": 6296,
       "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_6F45F105_64E4_07BC_41C3_B033578E7929.jpeg"
      }
     ]
    }
   }
  ],
  "partial": false,
  "vfov": 180
 },
 {
  "buttonZoomOut": {
   "borderRadius": 0,
   "width": 30,
   "mode": "push",
   "height": 30,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "buttonPlayRight": {
   "borderRadius": 0,
   "width": 38,
   "mode": "push",
   "height": 38,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonMoveDown": {
   "borderRadius": 0,
   "width": 30,
   "mode": "push",
   "height": 30,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonPlayLeft": {
   "borderRadius": 0,
   "width": 38,
   "mode": "push",
   "height": 38,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonRestart": {
   "borderRadius": 0,
   "width": 38,
   "mode": "push",
   "height": 38,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "buttonZoomIn": {
   "borderRadius": 0,
   "width": 30,
   "mode": "push",
   "height": 30,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonMoveLeft": {
   "borderRadius": 0,
   "width": 30,
   "mode": "push",
   "height": 30,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "buttonMoveRight": {
   "borderRadius": 0,
   "width": 30,
   "mode": "push",
   "height": 30,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  },
  "preloadEnabled": false,
  "buttonMoveUp": {
   "borderRadius": 0,
   "width": 30,
   "mode": "push",
   "height": 30,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_pressed.png",
   "class": "IconButton",
   "paddingLeft": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB_rollover.png",
   "cursor": "hand",
   "paddingBottom": 0,
   "minWidth": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB.png",
   "transparencyActive": false,
   "borderSize": 0,
   "paddingTop": 0,
   "verticalAlign": "middle",
   "backgroundOpacity": 0
  }
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_6F45F105_64E4_07BC_41C3_B033578E7929_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -9.52,
     "path": "shortest",
     "targetYaw": -165.26,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 7.68,
     "path": "shortest",
     "targetYaw": -81.3,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 7.27,
     "path": "shortest",
     "targetYaw": -30.92,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -27.95,
     "path": "shortest",
     "targetYaw": 11.67,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 17.92,
     "path": "shortest",
     "targetYaw": 70.24,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "end": "this.showWindow(this.window_7423E490_651C_0ED4_41D8_DB714BA55F1E, null, false); this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929_camera.get('initialSequence').pause()"
    },
    {
     "targetPitch": 42.08,
     "path": "shortest",
     "targetYaw": 127.99,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -6.66,
     "path": "shortest",
     "targetYaw": 149.69,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -56.21,
     "path": "shortest",
     "targetYaw": 119.8,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -67.27,
     "path": "shortest",
     "targetYaw": 31.74,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -58.26,
     "path": "shortest",
     "targetYaw": -72.29,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": -4.2,
     "path": "shortest",
     "targetYaw": -165.26,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 19.56,
     "path": "shortest",
     "targetYaw": -93.58,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 33.07,
     "path": "shortest",
     "targetYaw": 17,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -5.02,
     "path": "shortest",
     "targetYaw": 79.25,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -27.54,
     "path": "shortest",
     "targetYaw": 161.16,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -57.85,
     "path": "shortest",
     "targetYaw": 104.64,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -67.68,
     "path": "shortest",
     "targetYaw": -35.84,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -64.4,
     "path": "shortest",
     "targetYaw": -132.49,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 54.37,
     "path": "shortest",
     "targetYaw": 112.83,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1_t.jpg",
  "video": {
   "class": "VideoResource",
   "height": 360,
   "width": 640,
   "mp4Url": "media/video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1.mp4"
  },
  "label": "assinmanso",
  "width": 640,
  "id": "video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1",
  "loop": false,
  "height": 360,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "camera": "this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6F45F105_64E4_07BC_41C3_B033578E7929",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)"
   },
   {
    "camera": "this.panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_682BE574_64E4_0E5C_41D0_856C342FA4B3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 2, this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_75557AB8_651C_FAD4_41D4_D95BD9170B52",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid7535BA94_651C_FADD_41A9_38F380BDDB9AVideoPlayer)",
    "media": "this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": {
      "borderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontColor": "#606060",
      "transitionMode": "blending",
      "progressLeft": 10,
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadow": true,
      "toolTipBorderRadius": 3,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBorderSize": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "playbackBarLeft": 0,
      "shadow": false,
      "progressRight": 10,
      "toolTipPaddingLeft": 6,
      "progressOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarHeight": 20,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "borderSize": 0,
      "progressBorderSize": 2,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#AAAAAA",
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "toolTipShadowOpacity": 1,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "toolTipPaddingRight": 6,
      "toolTipBorderColor": "#767676",
      "width": "100%",
      "playbackBarBottom": 0,
      "playbackBarHeadBorderRadius": 0,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressHeight": 20,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBorderRadius": 4,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarRight": 0,
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowSpread": 0,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "paddingBottom": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid77E62035_6524_05DC_41CB_8100D492FF94",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "progressBarBorderColor": "#000000",
      "toolTipTextShadowColor": "#000000",
      "progressBarBorderRadius": 4,
      "height": "100%",
      "toolTipShadowBlurRadius": 3,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadHeight": 30,
      "playbackBarBorderRadius": 4,
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid7535BA94_651C_FADD_41A9_38F380BDDB9AVideoPlayer",
     "displayPlaybackBar": true,
     "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"
    },
    "start": "this.viewer_uid7535BA94_651C_FADD_41A9_38F380BDDB9AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_75557AB8_651C_FAD4_41D4_D95BD9170B52, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_75557AB8_651C_FAD4_41D4_D95BD9170B52, 0, this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_75552AB8_651C_FAD4_41A4_F61C492A545E",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid753A0A98_651C_FAD5_41D7_475284913F65VideoPlayer)",
    "media": "this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1",
    "class": "VideoPlayListItem",
    "player": {
     "class": "VideoPlayer",
     "viewerArea": {
      "borderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderSize": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipFontColor": "#606060",
      "transitionMode": "blending",
      "progressLeft": 10,
      "toolTipFontWeight": "normal",
      "playbackBarHeadShadow": true,
      "toolTipBorderRadius": 3,
      "progressBarBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipBorderSize": 1,
      "toolTipTextShadowOpacity": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarProgressBorderSize": 0,
      "progressBackgroundOpacity": 1,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipPaddingBottom": 4,
      "paddingLeft": 0,
      "playbackBarLeft": 0,
      "shadow": false,
      "progressRight": 10,
      "toolTipPaddingLeft": 6,
      "progressOpacity": 1,
      "playbackBarBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "toolTipShadowColor": "#333333",
      "playbackBarHeight": 20,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarProgressOpacity": 1,
      "borderSize": 0,
      "progressBorderSize": 2,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarBorderColor": "#AAAAAA",
      "progressBarOpacity": 1,
      "progressBottom": 2,
      "toolTipShadowOpacity": 1,
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarBorderSize": 2,
      "playbackBarBackgroundOpacity": 1,
      "toolTipPaddingRight": 6,
      "toolTipBorderColor": "#767676",
      "width": "100%",
      "playbackBarBottom": 0,
      "playbackBarHeadBorderRadius": 0,
      "class": "ViewerArea",
      "playbackBarHeadOpacity": 1,
      "progressBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipTextShadowBlurRadius": 3,
      "progressHeight": 20,
      "playbackBarHeadShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressBorderRadius": 4,
      "progressBackgroundColor": [
       "#EEEEEE",
       "#CCCCCC"
      ],
      "playbackBarRight": 0,
      "progressBorderColor": "#AAAAAA",
      "toolTipShadowSpread": 0,
      "paddingRight": 0,
      "playbackBarProgressBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "paddingBottom": 0,
      "playbackBarProgressBackgroundColorRatios": [
       0,
       1
      ],
      "minWidth": 100,
      "toolTipFontStyle": "normal",
      "id": "viewer_uid77E4F035_6524_05DC_41A9_E974153E0B4B",
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "progressBarBackgroundColor": [
       "#222222",
       "#444444"
      ],
      "progressBarBorderColor": "#000000",
      "toolTipTextShadowColor": "#000000",
      "progressBarBorderRadius": 4,
      "height": "100%",
      "toolTipShadowBlurRadius": 3,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipOpacity": 1,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadHeight": 30,
      "playbackBarBorderRadius": 4,
      "playbackBarOpacity": 1
     },
     "id": "viewer_uid753A0A98_651C_FAD5_41D7_475284913F65VideoPlayer",
     "displayPlaybackBar": true,
     "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440"
    },
    "start": "this.viewer_uid753A0A98_651C_FAD5_41D7_475284913F65VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_75552AB8_651C_FAD4_41A4_F61C492A545E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_75552AB8_651C_FAD4_41A4_F61C492A545E, 0, this.video_6ABACA0D_64E4_05CF_41B7_B71B1BC46CA1)"
   }
  ]
 },
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "backgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "footerHeight": 5,
  "headerBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "titleTextDecoration": "none",
  "titlePaddingTop": 5,
  "title": "ASSIN MANSO SLAVE RIVER PARK",
  "paddingLeft": 0,
  "titleFontColor": "#000000",
  "shadow": true,
  "bodyBorderSize": 0,
  "shadowBlurRadius": 6,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColorRatios": [],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 11,
  "shadowColor": "#000000",
  "closeButtonIconColor": "#000000",
  "headerPaddingRight": 10,
  "veilColorDirection": "horizontal",
  "borderSize": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "verticalAlign": "middle",
  "children": [
   {
    "borderRadius": 0,
    "width": "100%",
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "paddingLeft": 10,
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is a rare tour offering you very detailed education and experience on the infamous Trans-Atlantic Slave trade tracing it from three key slave sites at Breku, Cape Coast, Elmina, Assin Manso and a visit to Manhyia Palace Museum. We also offer you an unlimited purified bottled water, Star Tours Ghana T-Shirt and free WiFi. All entrance fees are included in this tour. You only need to sit back and enjoy the trip with our experienced guide and driver. At Star Tours we offer you the quality product. When you book with us, Any profit that is made through our trips goes directly to Future Stars Ghana, our charitable organization which supports over 150 orphans and destitute children</SPAN></DIV></div>",
    "minWidth": 0,
    "shadow": false,
    "id": "htmlText_uid77EC2FF6_6524_7A5C_41D6_B183E90E4150",
    "height": "43%",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   {
    "borderRadius": 0,
    "paddingBottom": 0,
    "minWidth": 0,
    "id": "image_uid77EC2FF6_6524_7A5C_41D6_B183E90E4150_1",
    "paddingRight": 0,
    "borderSize": 0,
    "shadow": false,
    "horizontalAlign": "center",
    "url": "media/photo_6A3008FE_64EC_064D_41C4_5A55268A7970.jpg",
    "minHeight": 0,
    "class": "Image",
    "paddingTop": 0,
    "width": "100%",
    "height": "56%",
    "verticalAlign": "middle",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "scaleMode": "fit_inside"
   }
  ],
  "shadowVerticalLength": 0,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "contentOpaque": false,
  "layout": "vertical",
  "bodyPaddingBottom": 5,
  "width": 400,
  "gap": 10,
  "height": 500,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "overflow": "scroll",
  "class": "Window",
  "horizontalAlign": "center",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "headerBorderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "bodyPaddingLeft": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "minHeight": 20,
  "titleFontSize": 14,
  "paddingRight": 0,
  "close": "this.camera_7613213E_6524_07CC_41C0_C45AEC4A232E.get('initialSequence').play()",
  "paddingBottom": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "closeButtonBackgroundColor": [],
  "bodyPaddingRight": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "id": "window_7423E490_651C_0ED4_41D8_DB714BA55F1E",
  "titleFontWeight": "normal",
  "bodyBackgroundOpacity": 1,
  "headerVerticalAlign": "middle",
  "bodyBorderColor": "#000000",
  "closeButtonIconWidth": 12,
  "paddingTop": 0,
  "closeButtonIconHeight": 12,
  "headerPaddingBottom": 10,
  "closeButtonIconLineWidth": 2,
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "shadowHorizontalLength": 3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPressedBorderSize": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "footerHeight": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "closeButtonPaddingTop": 5,
  "shadow": true,
  "shadowBlurRadius": 6,
  "closeButtonBorderSize": 0,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconColor": "#000000",
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "shadowColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "children": [
   "this.viewer_uid77E62035_6524_05DC_41CB_8100D492FF94"
  ],
  "shadowVerticalLength": 0,
  "closeButtonPaddingRight": 5,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "contentOpaque": false,
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "gap": 10,
  "class": "Window",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "overflow": "scroll",
  "horizontalAlign": "center",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "bodyPaddingLeft": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "paddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "minHeight": 20,
  "titleFontSize": 14,
  "close": "this.PlayList_75557AB8_651C_FAD4_41D4_D95BD9170B52.set('selectedIndex', -1);",
  "paddingBottom": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingBottom": 5,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarWidth": 10,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingRight": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_6ACF3639_64E4_0DD4_41C2_4CB76CA4B6B7",
  "bodyBackgroundOpacity": 0,
  "headerVerticalAlign": "middle",
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonIconWidth": 20,
  "paddingTop": 0,
  "closeButtonIconHeight": 20,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "footerBackgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 "this.popup_6936F4C1_64E4_0EB4_41D5_A7A3E34955C0",
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "closeButtonPressedIconColor": "#888888",
  "shadowHorizontalLength": 3,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "backgroundColor": [],
  "closeButtonRollOverBorderSize": 0,
  "closeButtonPressedBorderSize": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "footerHeight": 5,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconLineWidth": 5,
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPaddingBottom": 5,
  "closeButtonPaddingLeft": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingTop": 5,
  "paddingLeft": 0,
  "closeButtonPaddingTop": 5,
  "shadow": true,
  "shadowBlurRadius": 6,
  "closeButtonBorderSize": 0,
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconColor": "#000000",
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 0,
  "shadowColor": "#000000",
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "verticalAlign": "middle",
  "children": [
   "this.viewer_uid77E4F035_6524_05DC_41A9_E974153E0B4B"
  ],
  "shadowVerticalLength": 0,
  "closeButtonPaddingRight": 5,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "contentOpaque": false,
  "layout": "vertical",
  "bodyPaddingBottom": 0,
  "closeButtonBackgroundOpacity": 0.3,
  "gap": 10,
  "class": "Window",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "overflow": "scroll",
  "horizontalAlign": "center",
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 0,
  "bodyPaddingLeft": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "paddingRight": 0,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "minHeight": 20,
  "titleFontSize": 14,
  "close": "this.PlayList_75552AB8_651C_FAD4_41A4_F61C492A545E.set('selectedIndex', -1);",
  "paddingBottom": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 0,
  "titlePaddingBottom": 5,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "closeButtonBorderColor": "#000000",
  "scrollBarWidth": 10,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "bodyPaddingRight": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "id": "window_6BD66321_64E4_0BF4_41C6_2364A1C693B2",
  "bodyBackgroundOpacity": 0,
  "headerVerticalAlign": "middle",
  "closeButtonRollOverBorderColor": "#000000",
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonIconWidth": 20,
  "paddingTop": 0,
  "closeButtonIconHeight": 20,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "footerBackgroundOpacity": 0,
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 "this.popup_6A5B10F8_64E4_0654_41CD_694EBF5D5B0D",
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "backgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "footerHeight": 5,
  "headerBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "titleTextDecoration": "none",
  "titlePaddingTop": 5,
  "title": "Assin Manso Slave River Site",
  "paddingLeft": 0,
  "titleFontColor": "#FFFFFF",
  "shadow": true,
  "bodyBorderSize": 0,
  "shadowBlurRadius": 6,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColorRatios": [],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 11,
  "shadowColor": "#000000",
  "closeButtonIconColor": "#000000",
  "headerPaddingRight": 10,
  "veilColorDirection": "horizontal",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "borderSize": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "verticalAlign": "middle",
  "children": [
   {
    "borderRadius": 0,
    "width": "100%",
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "paddingLeft": 10,
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is a rare tour offering you very detailed education and experience on the infamous Trans-Atlantic Slave trade tracing it from three key slave sites at Breku, Cape Coast, Elmina, Assin Manso and a visit to Manhyia Palace Museum. We also offer you an unlimited purified bottled water, Star Tours Ghana T-Shirt and free WiFi. All entrance fees are included in this tour. You only need to sit back and enjoy the trip with our experienced guide and driver. At Star Tours we offer you the quality product. When you book with us, Any profit that is made through our trips goes directly to Future Stars Ghana, our charitable organization which supports over 150 orphans and destitute children</SPAN></DIV></div>",
    "minWidth": 0,
    "shadow": false,
    "id": "htmlText_uid77E46035_6524_05CC_41D5_C4BE349B7885",
    "height": "44%",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   {
    "borderRadius": 0,
    "paddingBottom": 0,
    "minWidth": 0,
    "id": "image_uid77E46035_6524_05CC_41D5_C4BE349B7885_1",
    "paddingRight": 0,
    "borderSize": 0,
    "shadow": false,
    "horizontalAlign": "center",
    "url": "media/photo_6A3008FE_64EC_064D_41C4_5A55268A7970.jpg",
    "minHeight": 0,
    "class": "Image",
    "paddingTop": 0,
    "width": "100%",
    "height": "55%",
    "verticalAlign": "middle",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "scaleMode": "fit_inside"
   }
  ],
  "shadowVerticalLength": 0,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "contentOpaque": false,
  "layout": "vertical",
  "bodyPaddingBottom": 5,
  "width": 400,
  "gap": 10,
  "height": 500,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "overflow": "scroll",
  "class": "Window",
  "horizontalAlign": "center",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#006600",
   "#009933"
  ],
  "headerBorderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "bodyPaddingLeft": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "minHeight": 20,
  "titleFontSize": 14,
  "paddingRight": 0,
  "paddingBottom": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "closeButtonBackgroundColor": [],
  "bodyPaddingRight": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "id": "window_69481A36_64EC_05DC_41AC_0D05A5C797B3",
  "titleFontWeight": "normal",
  "bodyBackgroundOpacity": 1,
  "headerVerticalAlign": "middle",
  "bodyBorderColor": "#000000",
  "closeButtonIconWidth": 12,
  "paddingTop": 0,
  "closeButtonIconHeight": 12,
  "headerPaddingBottom": 10,
  "closeButtonIconLineWidth": 2,
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 5,
  "scrollBarColor": "#000000",
  "shadowHorizontalLength": 3,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "backgroundColor": [],
  "closeButtonPressedIconColor": "#FFFFFF",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "modal": true,
  "footerHeight": 5,
  "headerBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "backgroundColorDirection": "vertical",
  "titleTextDecoration": "none",
  "titlePaddingTop": 5,
  "title": "ASSIN MANSOSLAVE  RIVER PARK",
  "paddingLeft": 0,
  "titleFontColor": "#FFFFFF",
  "shadow": true,
  "bodyBorderSize": 0,
  "shadowBlurRadius": 6,
  "titleFontStyle": "normal",
  "closeButtonBackgroundColorRatios": [],
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "veilOpacity": 0.4,
  "headerPaddingTop": 10,
  "shadowOpacity": 0.5,
  "closeButtonBorderRadius": 11,
  "shadowColor": "#000000",
  "closeButtonIconColor": "#000000",
  "headerPaddingRight": 10,
  "veilColorDirection": "horizontal",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "borderSize": 0,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "headerPaddingLeft": 10,
  "backgroundColorRatios": [],
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "backgroundOpacity": 1,
  "verticalAlign": "middle",
  "children": [
   {
    "borderRadius": 0,
    "width": "100%",
    "class": "HTMLText",
    "scrollBarMargin": 2,
    "paddingLeft": 10,
    "paddingRight": 10,
    "minHeight": 0,
    "paddingBottom": 10,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This is a rare tour offering you very detailed education and experience on the infamous Trans-Atlantic Slave trade tracing it from three key slave sites at Breku, Cape Coast, Elmina, Assin Manso and a visit to Manhyia Palace Museum. We also offer you an unlimited purified bottled water, Star Tours Ghana T-Shirt and free WiFi. All entrance fees are included in this tour. You only need to sit back and enjoy the trip with our experienced guide and driver. At Star Tours we offer you the quality product. When you book with us, Any profit that is made through our trips goes directly to Future Stars Ghana, our charitable organization which supports over 150 orphans and destitute children</SPAN></DIV></div>",
    "minWidth": 0,
    "shadow": false,
    "id": "htmlText_uid77E30044_6524_05BD_41C6_A0047334D773",
    "height": "43%",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "paddingTop": 10,
    "scrollBarColor": "#000000",
    "backgroundOpacity": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   },
   {
    "borderRadius": 0,
    "paddingBottom": 0,
    "minWidth": 0,
    "id": "image_uid77E30044_6524_05BD_41C6_A0047334D773_1",
    "paddingRight": 0,
    "borderSize": 0,
    "shadow": false,
    "horizontalAlign": "center",
    "url": "media/photo_6A3008FE_64EC_064D_41C4_5A55268A7970.jpg",
    "minHeight": 0,
    "class": "Image",
    "paddingTop": 0,
    "width": "100%",
    "height": "56%",
    "verticalAlign": "middle",
    "backgroundOpacity": 0,
    "paddingLeft": 0,
    "scaleMode": "fit_inside"
   }
  ],
  "shadowVerticalLength": 0,
  "titleFontFamily": "Arial",
  "veilColorRatios": [
   0,
   1
  ],
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "contentOpaque": false,
  "layout": "vertical",
  "bodyPaddingBottom": 5,
  "width": 400,
  "gap": 10,
  "height": 500,
  "hideEffect": {
   "class": "FadeOutEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "overflow": "scroll",
  "class": "Window",
  "horizontalAlign": "center",
  "headerBackgroundColor": [
   "#DDDDDD",
   "#006600",
   "#00FF33"
  ],
  "headerBorderSize": 0,
  "headerBackgroundColorDirection": "vertical",
  "bodyPaddingTop": 5,
  "bodyPaddingLeft": 5,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "scrollBarMargin": 2,
  "shadowSpread": 1,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "footerBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "minHeight": 20,
  "titleFontSize": 14,
  "paddingRight": 0,
  "paddingBottom": 0,
  "titlePaddingLeft": 5,
  "headerBackgroundOpacity": 1,
  "titlePaddingBottom": 5,
  "minWidth": 20,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 500,
   "easing": "cubic_in_out"
  },
  "scrollBarWidth": 10,
  "closeButtonBackgroundColor": [],
  "bodyPaddingRight": 5,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "id": "window_744E92AC_6524_0ACC_41C7_3D1478A0879F",
  "titleFontWeight": "normal",
  "bodyBackgroundOpacity": 1,
  "headerVerticalAlign": "middle",
  "bodyBorderColor": "#000000",
  "closeButtonIconWidth": 12,
  "paddingTop": 0,
  "closeButtonIconHeight": 12,
  "headerPaddingBottom": 10,
  "closeButtonIconLineWidth": 2,
  "scrollBarVisible": "rollOver",
  "titlePaddingRight": 5,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.67,
   "pitch": 0
  },
  "id": "camera_76096110_6524_07D4_41C3_F4CA27906C1F",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 0,
     "path": "shortest",
     "targetYaw": 0,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.08,
     "easing": "cubic_in_out",
     "yawSpeed": 33.32
    },
    {
     "targetPitch": -4.2,
     "path": "shortest",
     "targetYaw": -165.26,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 19.56,
     "path": "shortest",
     "targetYaw": -93.58,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 33.07,
     "path": "shortest",
     "targetYaw": 17,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -5.02,
     "path": "shortest",
     "targetYaw": 79.25,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -27.54,
     "path": "shortest",
     "targetYaw": 161.16,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -57.85,
     "path": "shortest",
     "targetYaw": 104.64,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -67.68,
     "path": "shortest",
     "targetYaw": -35.84,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -64.4,
     "path": "shortest",
     "targetYaw": -132.49,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 54.37,
     "path": "shortest",
     "targetYaw": 112.83,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.1,
   "pitch": 0
  },
  "id": "camera_7613213E_6524_07CC_41C0_C45AEC4A232E",
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "targetPitch": 0,
     "path": "shortest",
     "targetYaw": 0,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 15.55,
     "easing": "cubic_in_out",
     "yawSpeed": 30.24
    },
    {
     "targetPitch": -9.52,
     "path": "shortest",
     "targetYaw": -165.26,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 7.68,
     "path": "shortest",
     "targetYaw": -81.3,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 7.27,
     "path": "shortest",
     "targetYaw": -30.92,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -27.95,
     "path": "shortest",
     "targetYaw": 11.67,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": 17.92,
     "path": "shortest",
     "targetYaw": 70.24,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25,
     "end": "this.showWindow(this.window_7423E490_651C_0ED4_41D8_DB714BA55F1E, null, false); this.camera_7613213E_6524_07CC_41C0_C45AEC4A232E.get('initialSequence').pause()"
    },
    {
     "targetPitch": 42.08,
     "path": "shortest",
     "targetYaw": 127.99,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -6.66,
     "path": "shortest",
     "targetYaw": 149.69,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -56.21,
     "path": "shortest",
     "targetYaw": 119.8,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -67.27,
     "path": "shortest",
     "targetYaw": 31.74,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    },
    {
     "targetPitch": -58.26,
     "path": "shortest",
     "targetYaw": -72.29,
     "class": "TargetPanoramaCameraMovement",
     "pitchSpeed": 17.05,
     "easing": "cubic_in_out",
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Photo",
  "duration": 5000,
  "thumbnailUrl": "media/photo_6A3008FE_64EC_064D_41C4_5A55268A7970_t.jpg",
  "label": "assin",
  "width": 1280,
  "id": "photo_6A3008FE_64EC_064D_41C4_5A55268A7970",
  "height": 720,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "class": "ImageResourceLevel",
     "url": "media/photo_6A3008FE_64EC_064D_41C4_5A55268A7970.jpg"
    }
   ]
  }
 },
 "this.audio_6A8E9769_651C_0A74_41B8_803C6632635A",
 "this.audio_7517726B_651C_0A74_41B3_55BFAAE3E3BB"
], "children": [
 {
  "borderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "toolTipBackgroundColor": "#F6F6F6",
  "transitionMode": "blending",
  "progressLeft": 10,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadow": true,
  "toolTipBorderRadius": 3,
  "right": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderSize": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "toolTipFontFamily": "Arial",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "paddingLeft": 0,
  "playbackBarLeft": 0,
  "shadow": false,
  "progressRight": 10,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarHeight": 20,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "borderSize": 0,
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#AAAAAA",
  "progressBarOpacity": 1,
  "progressBottom": 1,
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "toolTipPaddingRight": 6,
  "class": "ViewerArea",
  "playbackBarBottom": 10,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressHeight": 20,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderRadius": 4,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarRight": 0,
  "progressBorderColor": "#AAAAAA",
  "minHeight": 50,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowColor": "#000000",
  "top": 77,
  "paddingBottom": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "toolTipFontStyle": "normal",
  "bottom": 92,
  "id": "MainViewer",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowVerticalLength": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 4,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderRadius": 4,
  "toolTipFontSize": 12,
  "toolTipOpacity": 1,
  "paddingTop": 0,
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadHeight": 30,
  "left": 0
 },
 {
  "borderRadius": 5,
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "right": 9,
  "backgroundColor": [
   "#000000"
  ],
  "itemBackgroundOpacity": 0,
  "itemOpacity": 1,
  "maxWidth": 800,
  "itemThumbnailOpacity": 1,
  "itemLabelGap": 5,
  "itemThumbnailShadowSpread": 1,
  "maxHeight": 800,
  "gap": 10,
  "class": "ThumbnailList",
  "itemLabelFontSize": 14,
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailShadow": true,
  "itemLabelFontStyle": "normal",
  "itemMode": "normal",
  "itemLabelPosition": "bottom",
  "horizontalAlign": "left",
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailShadowOpacity": 0.8,
  "itemThumbnailShadowBlurRadius": 4,
  "itemLabelFontWeight": "normal",
  "itemVerticalAlign": "middle",
  "itemLabelFontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingTop": 3,
  "layout": "vertical",
  "scrollBarMargin": 2,
  "minHeight": 0,
  "itemPaddingRight": 3,
  "paddingLeft": 20,
  "paddingRight": 20,
  "itemPaddingLeft": 3,
  "shadow": false,
  "itemThumbnailWidth": 100,
  "itemBackgroundColorRatios": [],
  "top": 84,
  "paddingBottom": 10,
  "bottom": 100,
  "itemThumbnailScaleMode": "fit_outside",
  "minWidth": 0,
  "id": "thumbnaillist5245",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarWidth": 10,
  "itemBackgroundColor": [],
  "borderSize": 0,
  "itemHorizontalAlign": "center",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemPaddingBottom": 3,
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelTextDecoration": "none",
  "backgroundColorRatios": [
   0
  ],
  "scrollBarColor": "#FFFFFF",
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailHeight": 75,
  "backgroundOpacity": 0.2,
  "itemBackgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "verticalAlign": "top",
  "paddingTop": 10,
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 0,
  "verticalAlign": "middle",
  "fontSize": 40,
  "width": 774,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "fontStyle": "normal",
  "text": "ASSIN MANSO SLAVE RIVER PARK",
  "horizontalAlign": "center",
  "height": 49,
  "minHeight": 16,
  "paddingLeft": 0,
  "paddingRight": 0,
  "shadow": false,
  "top": 14,
  "fontWeight": "bold",
  "paddingBottom": 0,
  "fontColor": "#666666",
  "minWidth": 30,
  "id": "label4056",
  "class": "Label",
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "left": 9
 },
 {
  "borderRadius": 0,
  "children": [
   {
    "borderRadius": 0,
    "children": [
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
     {
      "borderRadius": 0,
      "width": 38,
      "mode": "toggle",
      "height": 38,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C_pressed.png",
      "class": "IconButton",
      "paddingLeft": 0,
      "paddingRight": 0,
      "minHeight": 0,
      "shadow": false,
      "cursor": "hand",
      "paddingBottom": 0,
      "minWidth": 0,
      "id": "IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
      "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C.png",
      "transparencyActive": false,
      "borderSize": 0,
      "paddingTop": 0,
      "verticalAlign": "middle",
      "backgroundOpacity": 0
     },
     {
      "borderRadius": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41CC_38D2D4BB39F5",
       {
        "borderRadius": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_0446DB5868FB",
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41B1_60676E6E38E2"
        ],
        "verticalAlign": "middle",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "contentOpaque": false,
        "layout": "vertical",
        "width": 47,
        "gap": 10,
        "overflow": "hidden",
        "class": "Container",
        "horizontalAlign": "center",
        "backgroundColorDirection": "vertical",
        "height": "100%",
        "scrollBarMargin": 2,
        "paddingLeft": 0,
        "paddingRight": 0,
        "minHeight": 20,
        "paddingBottom": 0,
        "minWidth": 20,
        "shadow": false,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "scrollBarWidth": 10,
        "borderSize": 0,
        "backgroundColorRatios": [
         0
        ],
        "paddingTop": 0,
        "scrollBarColor": "#000000",
        "backgroundOpacity": 1,
        "scrollBarVisible": "rollOver",
        "scrollBarOpacity": 0.5
       },
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B8_FD6638571894"
      ],
      "verticalAlign": "middle",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "contentOpaque": false,
      "layout": "horizontal",
      "width": 133,
      "gap": 5,
      "overflow": "hidden",
      "class": "Container",
      "horizontalAlign": "center",
      "backgroundColorDirection": "vertical",
      "height": "100%",
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "paddingRight": 0,
      "minHeight": 20,
      "paddingBottom": 0,
      "minWidth": 20,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "backgroundColorRatios": [
       0
      ],
      "paddingTop": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     },
     {
      "borderRadius": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "verticalAlign": "middle",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "contentOpaque": false,
      "layout": "horizontal",
      "width": 85,
      "gap": 10,
      "overflow": "hidden",
      "class": "Container",
      "horizontalAlign": "center",
      "backgroundColorDirection": "vertical",
      "height": "100%",
      "scrollBarMargin": 2,
      "paddingLeft": 0,
      "paddingRight": 0,
      "minHeight": 20,
      "paddingBottom": 0,
      "minWidth": 20,
      "shadow": false,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "scrollBarWidth": 10,
      "borderSize": 0,
      "backgroundColorRatios": [
       0
      ],
      "paddingTop": 0,
      "scrollBarColor": "#000000",
      "backgroundOpacity": 1,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5
     }
    ],
    "verticalAlign": "middle",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "contentOpaque": false,
    "layout": "horizontal",
    "width": 468,
    "gap": 10,
    "overflow": "hidden",
    "class": "Container",
    "horizontalAlign": "center",
    "backgroundColorDirection": "vertical",
    "height": "93.478%",
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "paddingRight": 0,
    "minHeight": 20,
    "paddingBottom": 0,
    "minWidth": 468,
    "shadow": false,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "scrollBarWidth": 10,
    "borderSize": 0,
    "backgroundColorRatios": [
     0
    ],
    "paddingTop": 0,
    "backgroundOpacity": 1,
    "scrollBarColor": "#000000",
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5
   }
  ],
  "verticalAlign": "middle",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "contentOpaque": false,
  "layout": "horizontal",
  "gap": 6,
  "height": 92,
  "overflow": "scroll",
  "class": "Container",
  "horizontalAlign": "center",
  "width": "100%",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "paddingRight": 0,
  "minHeight": 1,
  "shadow": false,
  "paddingBottom": 0,
  "minWidth": 1,
  "scrollBarWidth": 10,
  "bottom": "0%",
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5
 },
 {
  "borderRadius": 0,
  "backgroundColor": [
   "#000000"
  ],
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "minHeight": 0,
  "paddingLeft": 0,
  "paddingRight": 0,
  "shadow": false,
  "top": 0,
  "paddingBottom": 0,
  "visible": false,
  "minWidth": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "borderSize": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "right": 0,
  "backgroundOpacity": 0.55,
  "left": 0
 },
 {
  "borderRadius": 0,
  "backgroundColor": [],
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "minHeight": 0,
  "paddingLeft": 0,
  "paddingRight": 0,
  "shadow": false,
  "top": 0,
  "paddingBottom": 0,
  "visible": false,
  "minWidth": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "borderSize": 0,
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "right": 0,
  "backgroundOpacity": 1,
  "left": 0
 },
 {
  "borderRadius": 0,
  "verticalAlign": "middle",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconBeforeLabel": true,
  "fontSize": 12,
  "layout": "horizontal",
  "gap": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "mode": "push",
  "iconColor": "#000000",
  "horizontalAlign": "center",
  "iconHeight": 20,
  "fontFamily": "Arial",
  "class": "CloseButton",
  "textDecoration": "none",
  "fontStyle": "normal",
  "backgroundColorDirection": "vertical",
  "iconWidth": 20,
  "minHeight": 0,
  "paddingLeft": 5,
  "paddingRight": 5,
  "shadow": false,
  "top": 10,
  "fontWeight": "normal",
  "cursor": "hand",
  "paddingBottom": 5,
  "visible": false,
  "shadowBlurRadius": 6,
  "borderColor": "#000000",
  "fontColor": "#FFFFFF",
  "minWidth": 0,
  "id": "closeButtonPopupPanorama",
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "iconLineWidth": 5,
  "borderSize": 0,
  "rollOverIconColor": "#666666",
  "shadowColor": "#000000",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "paddingTop": 5,
  "right": 10,
  "backgroundOpacity": 0.3,
  "label": ""
 }
], 
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "borderRadius": 0,
 "verticalAlign": "top",
 "contentOpaque": false,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); }
 },
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_4EEC4AA5_5E2B_1FC1_41D3_B293915DD88C",
 "gap": 10,
 "layout": "absolute",
 "overflow": "visible",
 "class": "Player",
 "horizontalAlign": "left",
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "width": "100%",
 "paddingBottom": 0,
 "minWidth": 20,
 "shadow": false,
 "id": "rootPlayer",
 "scrollBarWidth": 10,
 "borderSize": 0,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5
})