(this.webpackJsonpproj1=this.webpackJsonpproj1||[]).push([[0],[,,,function(e,a,t){e.exports=t(20)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(2),s=t.n(o);t(12),t(13);var l=e=>{let{onContentChange:a,activeContent:t}=e;return i.a.createElement("div",{className:"sidebar"},i.a.createElement("h2",{className:"sidebar-title"},"Menu"),i.a.createElement("div",{className:"sidebar-list-container"},i.a.createElement("ul",{className:"sidebar-list"},["Introduction","Walkway Quality","Unmarked Walkway","Bibliography","Quiz"].map(e=>i.a.createElement("li",{key:e,className:"sidebar-item "+(e===t?"active":""),onClick:()=>a(e)},e)))))};t(14);var r=e=>{let{onContentChange:a}=e;return i.a.createElement("div",{className:"introduction"},i.a.createElement("h2",null,"Using Computer Vision to Enhance Walkway Accessibility for the Visually Impaired"),i.a.createElement("p",null,"This tutorial explores the challenges visually impaired individuals face with walkways and introduces our proposed computer vision solutions."),i.a.createElement("div",{className:"cards-container"},i.a.createElement("div",{className:"card",onClick:()=>a("Walkway Quality")},i.a.createElement("h3",null,"Assessing Walkways Quality (Normal/Damaged)"),i.a.createElement("img",{src:"https://i.postimg.cc/nVsSTGzy/temp-Image-Ykyb-SQ.avif",alt:"Assessing Walkways Quality",className:"card-image"}),i.a.createElement("p",null,"Our system evaluates the condition of walkways to identify damages and ensure safe navigation for the visually impaired.")),i.a.createElement("div",{className:"card",onClick:()=>a("Unmarked Walkway")},i.a.createElement("h3",null,"Curb Detection or Navigation in Unmarked Environments"),i.a.createElement("img",{src:"https://i.postimg.cc/bw6MgQWW/temp-Imagecg-YYBZ.avif",alt:"Curb Detection",className:"card-image"}),i.a.createElement("p",null,"Utilizing advanced computer vision techniques, our solution detects curbs and assists users in navigating unmarked areas confidently."))),i.a.createElement("p",null,"Let's look at each of the cases in detail and how we propose to deal with them."))};t(15);var c=e=>{let{onCitationClick:a}=e;return i.a.createElement("div",{className:"walkway-quality"},i.a.createElement("h2",null,"Assessing Walkway Quality (Normal/Damaged)"),i.a.createElement("h3",null,"Introduction"),i.a.createElement("p",null,"Ensuring the safety of walkways is crucial, especially for the visually impaired. Our system evaluates the condition of walkways to identify damages like cracks and potholes, facilitating safer navigation."),i.a.createElement("h3",null,"Previous Approaches"),i.a.createElement("p",null,"Earlier methods primarily used RGB images of roads or sensor data (e.g., accelerometer and gyroscope) to detect road cracks and potholes"," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(1)},"[1]"),","," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(2)},"[2]"),","," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(3)},"[3]"),","," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(4)},"[4]")," and to recognize sidewalk anomalies"," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(5)},"[5]"),","," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(6)},"[6]")," using machine learning algorithms."),i.a.createElement("p",null,i.a.createElement("img",{src:"https://i.postimg.cc/W1MzGWhp/temp-Imagea-V1k-Jz.avif",alt:"Walkway anomalies detection"})),i.a.createElement("h3",null,"Technologies Used"),i.a.createElement("p",null,"To improve performance, recent approaches have integrated various sensor modalities with advanced deep learning architectures. Key technologies include:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Convolutional Neural Networks (CNNs):")," A type of deep learning model particularly effective for image recognition and classification tasks. CNNs automatically learn hierarchical feature representations from raw image data."),i.a.createElement("li",null,i.a.createElement("strong",null,"Local Binary Pattern (LBP):")," An image texture descriptor that thresholds each pixel's neighborhood to create a binary number, capturing local texture information useful for pattern recognition."),i.a.createElement("li",null,i.a.createElement("strong",null,"Gabor Filters:")," Linear filters used for edge detection, texture analysis, and feature extraction by responding to specific frequency and orientation components in images."),i.a.createElement("li",null,i.a.createElement("strong",null,"YOLO v2 (You Only Look Once version 2):")," A real-time object detection system that processes images in a single evaluation, making it efficient for applications requiring speed"," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(7)},"[7]"),".")),i.a.createElement("h3",null,"Current Trends"),i.a.createElement("p",null,"The latest advancements involve using transformer-based architectures for detecting road surface anomalies"," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(8)},"[8]"),". Transformers, initially designed for natural language processing, excel at capturing long-range dependencies in data, making them suitable for image analysis tasks."),i.a.createElement("p",null,"For depth estimation using a single (monocular) camera, Planar Parallax estimation techniques are utilized"," ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(9)},"[9]"),". This method estimates depth by analyzing the apparent motion (parallax) of objects between different frames, aiding in identifying surface irregularities."),i.a.createElement("p",null,i.a.createElement("img",{src:"https://i.postimg.cc/vZB32Z1D/temp-Imagey-Tbo-HN.avif",alt:"Transformer-based architecture for anomaly detection"})),i.a.createElement("h3",null,"Conclusion"),i.a.createElement("p",null,"By leveraging these advanced technologies, our system aims to provide accurate and real-time assessments of walkway quality, enhancing safety and accessibility for all pedestrians."))};t(16);var u=e=>{let{onCitationClick:a}=e;return i.a.createElement("div",{className:"unmarked-walkway"},i.a.createElement("h1",null,"Technologies in Computer Vision for Sidewalk Detection and Path Suggestion"),i.a.createElement("p",null,"Computer vision technologies are advancing rapidly, and one of their practical applications is in detecting sidewalks and suggesting safe paths for pedestrians, even when sidewalks are not clearly demarcated. Below, we discuss five key technologies that are pivotal in achieving these tasks."),i.a.createElement("h2",null,"1. Semantic Segmentation"),i.a.createElement("p",null,'Semantic segmentation is a process where each pixel of an image is classified into a specific category. In the case of sidewalk detection, categories might include "sidewalk", "road", "grass", etc.'),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Technology:")," Fully Convolutional Networks (FCNs), U-Net, and DeepLab are commonly used neural networks for semantic segmentation."),i.a.createElement("li",null,i.a.createElement("strong",null,"Use Case:")," By analyzing images from cameras, a system can determine which regions correspond to sidewalks and other surfaces, making it easier to detect safe pedestrian areas.")),i.a.createElement("h2",null,"2. Object Detection and Recognition"),i.a.createElement("p",null,"Object detection focuses on identifying and classifying objects within an image, such as vehicles, pedestrians, and obstacles. This is essential for sidewalk detection, as road elements like curbs and road edges help determine where it\u2019s safe to walk."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Technology:")," YOLO (You Only Look Once), SSD (Single Shot Multibox Detector), and Faster R-CNN are common object detection models."),i.a.createElement("li",null,i.a.createElement("strong",null,"Use Case:")," These models can recognize curbs, pedestrians, and other obstacles, providing contextual information that can infer the location of a sidewalk or safe pedestrian zones.")),i.a.createElement("h2",null,"3. Depth Estimation and 3D Reconstruction"),i.a.createElement("p",null,"Depth estimation involves determining the distance of objects and surfaces in an image, creating a 3D model of the surroundings. This helps systems differentiate between various surfaces like sidewalks, roads, and obstacles."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Technology:")," Stereo vision, monocular depth estimation using deep learning (e.g., MiDaS), or depth sensors are used for generating depth maps."),i.a.createElement("li",null,i.a.createElement("strong",null,"Use Case:")," Depth maps generated from these technologies allow systems to perceive elevation changes, such as sidewalks or curbs, enabling safer path suggestions.")),i.a.createElement("h2",null,"4. Lane and Edge Detection"),i.a.createElement("p",null,"Lane and edge detection algorithms are primarily used in autonomous driving to detect road boundaries, but they can also be applied to sidewalk detection or path inference."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Technology:")," Hough Transform, canny edge detection ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(11)},"[11]"),", and deep learning models like LaneNet are commonly used techniques for lane and edge detection."),i.a.createElement("li",null,i.a.createElement("strong",null,"Use Case:")," These algorithms can detect road edges and boundaries, allowing systems to infer potential sidewalk areas and provide pedestrians with a safe route, even when no sidewalk is marked.")),i.a.createElement("h2",null,"5. LiDAR and Sensor Fusion"),i.a.createElement("p",null,"LiDAR (Light Detection and Ranging) technology provides detailed 3D maps of the surroundings by emitting laser beams and measuring their reflections. When combined with camera data (sensor fusion), this can enhance the accuracy of sidewalk detection and path planning."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Technology:")," LiDAR and camera-based sensor fusion ",i.a.createElement("button",{className:"citation-button",onClick:()=>a(12)},"[12]")," can be used for 3D environmental mapping."),i.a.createElement("li",null,i.a.createElement("strong",null,"Use Case:")," LiDAR detects subtle differences in elevation and texture, helping to identify sidewalks or infer safe zones for pedestrians in areas without clear sidewalk markings.")),i.a.createElement("p",null,"These technologies, when combined, provide a robust solution for detecting sidewalks and ensuring pedestrian safety in urban environments where infrastructure may not always be clearly defined."))};t(17);var m=e=>{let{highlightedCitation:a}=e;return i.a.createElement("div",{className:"bibliography"},i.a.createElement("h2",null,"Bibliography"),i.a.createElement("ul",null,[{number:1,text:"Basavaraju, A., Du, J., Zhou, F., & Ji, J. (2019). A machine learning approach to road surface anomaly assessment using smartphone sensors. IEEE Sensors Journal, 20(5), 2635-2647."},{number:2,text:"Dharneeshkar, J., Aniruthan, S. A., Karthika, R., & Parameswaran, L. (2020, February). Deep Learning based Detection of potholes in Indian roads using YOLO. In 2020 international conference on inventive computation technologies (ICICT) (pp. 381-385). IEEE."},{number:3,text:"Wu, C., Wang, Z., Hu, S., Lepine, J., Na, X., Ainalis, D., & Stettler, M. (2020). An automated machine-learning approach for road pothole detection using smartphone sensor data. Sensors, 20(19), 5564."},{number:4,text:"Feng, X., Xiao, L., Li, W., Pei, L., Sun, Z., Ma, Z., ... & Ju, H. (2020). Pavement crack detection and segmentation method based on improved deep learning fusion model. Mathematical Problems in Engineering, 2020(1), 8515213."},{number:5,text:"Watanabe, T., Takahashi, H., Iwasawa, Y., Matsuo, Y., & Eguchi Yairi, I. (2019). Weakly supervised learning for evaluating road surface condition from wheelchair driving data. Information, 11(1), 2."},{number:6,text:"Iwasawa, Y., Yairi, I. E., & Matsuo, Y. (2016). Combining human action sensing of wheelchair users and machine learning for autonomous accessibility data collection. IEICE TRANSACTIONS on Information and Systems, 99(4), 1153-1161."},{number:7,text:"Mandal, Vishal & Uong, Lan & Adu-Gyamfi, Yaw. (2018). Automated Road Crack Detection Using Deep Convolutional Neural Networks. 5212-5215. 10.1109/BigData.2018.8622327. "},{number:8,text:'C. Y. Koh, M. Ali and A. Hendawi, "CrackLens: Automated Sidewalk Crack Detection and Segmentation," in IEEE Transactions on Artificial Intelligence, doi: 10.1109/TAI.2024.3435608'},{number:9,text:'H. Yuan et al., "Monocular Road Planar Parallax Estimation," in IEEE Transactions on Image Processing, vol. 32, pp. 3690-3701, 2023, doi: 10.1109/TIP.2023.3289323.'},{number:10,text:"Yuhan Jiang, Sisi Han, Dapeng Li, Yong Bai, Mingzhu Wang,Automatic concrete sidewalk deficiency detection and mapping with deep learning,Expert Systems with Applications,Volume 207,2022,117980,ISSN 0957-4174, doi.org/10.1016/j.eswa.2022.117980."},{number:11,text:"2015 International Conference on Control, Automation and Information Sciences (ICCAIS) October 29-31, 2015, Changshu, China Real Time Road Edges Detection And Road Signs Recognition"},{number:12,text:'Xiangdong Wang, Yunfei Cai and Tingmin Shi, "Road edge detection based on improved RANSAC and 2D LIDAR Data," 2015 International Conference on Control, Automation and Information Sciences (ICCAIS), Changshu, 2015, pp. 191-196, doi: 10.1109/ICCAIS.2015.7338660.'}].map(e=>i.a.createElement("li",{key:e.number,className:"bibliography-item "+(a===e.number?"highlighted":"")},"[",e.number,"] ",e.text))))};t(18);var d=()=>{const e=[{question:"What technology is used to detect walkways quality?",options:["Machine Learning","Computer Vision","Blockchain","Cloud Computing"],answer:"Computer Vision"},{question:"What is the primary goal of curb detection?",options:["To improve aesthetics","To assist navigation","To reduce costs","To enhance speed"],answer:"To assist navigation"},{question:"third question",options:["To improve aesthetics","To assist navigation","To reduce costs","To enhance speed"],answer:"To assist navigation"},{question:"What is the primary goal of curb detection?",options:["To improve aesthetics","To assist navigation","To reduce costs","To enhance speed"],answer:"To assist navigation"},{question:"What is the primary goal of curb detection?",options:["To improve aesthetics","To assist navigation","To reduce costs","To enhance speed"],answer:"To assist navigation"}],[a,t]=Object(n.useState)(0),[o,s]=Object(n.useState)(""),[l,r]=Object(n.useState)(0),[c,u]=Object(n.useState)(!1);return i.a.createElement("div",{className:"quiz"},i.a.createElement("h2",null,"Quiz"),c?i.a.createElement("div",{className:"score-section"},"You scored ",l," out of ",e.length):i.a.createElement("div",{className:"quiz-section"},i.a.createElement("div",{className:"question-section"},i.a.createElement("div",{className:"question-count"},i.a.createElement("span",null,"Question ",a+1),"/",e.length),i.a.createElement("div",{className:"question-text"},e[a].question)),i.a.createElement("div",{className:"answer-section"},e[a].options.map(t=>i.a.createElement("button",{key:t,className:"option-button "+(o===t?"selected":""),onClick:()=>(t=>{s(t),t===e[a].answer&&r(l+1)})(t),disabled:""!==o},t))),o&&i.a.createElement("button",{onClick:()=>{s(""),a+1<e.length?t(a+1):u(!0)},className:"next-button"},a+1===e.length?"Finish":"Next")))};var g=e=>{let{content:a,highlightedCitation:t,onCitationClick:n,onContentChange:o}=e;return i.a.createElement("div",{className:"main-content"},(()=>{switch(a){case"Introduction":return i.a.createElement(r,null);case"Walkway Quality":return i.a.createElement(c,null);case"Unmarked Walkway":return i.a.createElement(u,{onCitationClick:n});case"Bibliography":return i.a.createElement(m,{highlightedCitation:t});case"Quiz":return i.a.createElement(d,null);default:return i.a.createElement(r,null)}})())};t(19);var h=function(){const e=["Introduction","Walkway Quality","Unmarked Walkway","Bibliography","Quiz"],[a,t]=Object(n.useState)("Introduction"),[o,s]=Object(n.useState)(null),r=e=>{t(e),s(null)};return i.a.createElement("div",{className:"app"},i.a.createElement(l,{onContentChange:r,activeContent:a}),i.a.createElement(g,{content:a,highlightedCitation:o,onCitationClick:e=>{t("Bibliography"),s(e)},onContentChange:r}),i.a.createElement("div",{className:"navigation-buttons"},i.a.createElement("button",{onClick:()=>{const n=(e.indexOf(a)-1+e.length)%e.length;t(e[n]),s(null)},className:"nav-button"},"Previous"),i.a.createElement("button",{onClick:()=>{const n=(e.indexOf(a)+1)%e.length;t(e[n]),s(null)},className:"nav-button"},"Next")))};s.a.createRoot(document.getElementById("root")).render(i.a.createElement(h,null))}],[[3,1,2]]]);
//# sourceMappingURL=main.20461aef.chunk.js.map