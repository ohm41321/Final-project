import { defineStore } from "pinia";
import { ref } from 'vue';


export const dataStore = defineStore('course', () => {

    const courseList = ref([
    { 
    id: 1, name: 'Music',
    img: "https://assets.yousician.com/app/uploads/2022/05/05130122/yousician-educational-photography-21-1024x683.jpg.webp",
    detail:'สอนทฤษฎีดนตรีบำบัด (Music Theory) ตั้งแต่การปูพื้นฐานด้านดนตรี จากคุณครูมีที่ประสบการณ์ทางด้านดนตรีมากกว่า 10 ปีประโยชน์ที่ผู้เรียนจะได้รับสามารถสอบเข้าคณะดุริยางค์ เอกวิชาดนตรี ของมหาวิทยาลัยดังๆ ได้ หรือสามารถสอบทฤษฎีดนตรีได้',
    wht_earn:'เพื่อพัฒนาทักษะความสามารถทางดนตรี เเละทำให้สามารถสอบเข้าคณะดุริยางค์ เอกวิชาดนตรี  หรือสามารถสอบทฤษฎีดนตรีได้',
    who_study:'ทุกคนที่เรียนดนตรี และสนใจเรียนทฤษฎีดนตรี เพื่อนำไปใช้ต่อยอดกับการเรียน, ผู้ที่ต้องการเตรียมสอบเข้า คณะดุริยางคศิลป์ ด้านดนตรี',
    knowledge:'ไม่จำเป็นต้องมีความรู้ เพียงแค่มีความสนใจทางด้านดนตรี',
    caption:'',
    },{ 
    id: 2, name: 'Cooking',
    img: "https://www.ofm.co.th/blog/wp-content/uploads/2021/09/%E0%B8%97%E0%B8%B3%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87_3.jpg",
    detail:'หลักสูตรเชฟอาหารไทย แบบเร่งรัด 90 ชั่วโมง (90 Hours Intensive Course) เป็นหลักสูตรที่เหมาะสำหรับผู้สนใจพัฒนาทักษะ และเทคนิคการทำอาหารไทยให้มากขึ้นในสายอาชีพที่ทำงานอยู่ในปัจจุบัน โดยจะเรียนรู้และลงมือปฎิบัติจริงในครัวที่ได้มาตรฐานมากกว่า 35 เมนู ที่เป็นอาหารไทย, ขนมไทย และของว่างที่มีเอกลักษณ์เฉพาะและรสชาติไทยแท้ สอนโดยอาจารย์และเชฟอาหารไทยมืออาชีพมาเป็นผู้ถ่ายทอดการสอนให้กับนักเรียนและคอยดูแลให้คำปรึกษานักเรียนอย่างใกล้ชิด',
    wht_earn:'เพื้อให้ผู้เรียนพัฒนาทักษะความสามารถทางด้านการทำอาหารให้ถูกสุขอนามัยอีกทั้งยังสามารถนำมาต่อยอดการประกอบอาชีพได้ในอนาคต',
    who_study:'บุคคลที่ต้องการเป็นเชฟอาหารไทย และต้องการทำงานในประเทศ หรือต่างประเทศบุคคลที่มีพื้นฐานการทำอาหารมาก่อน และมาเพิ่มเติมความรู้ด้านอาหารไทยให้มากขึ้นในสายอาชีพ บุคคลที่ต้องการสอบวัดระดับมาตรฐานอาชีพจากกรมพัฒนาฝีมือแรงงาน แต่มีเวลาเรียนจำกัด',
    knowledge:'ไม่จำเป็นต้องมีความรู้ เพียงแค่มีความสนใจทางด้านการทำอาหาร',
    caption:'',
    },{
    id: 3, name: 'Drawing',
    img: " ",
    detail:'การสร้างภาพวาดเบื้องต้นในรูปแบบการ์ตูนและสติกเกอร์ใช้เทคนิคพื้นฐานในการเขียนและเรนเดอริ่งการวาดภาพตามแนวคิดและการสร้างภาพจากความคิดสร้างสรรค์',
    wht_earn:'เพื้อให้ผู้เรียนพัฒนาความสามารถทักษะการวาดรูปการออกเเบบปูพื้นฐานความคิดเชิงศิลและสร้างสรรค์เพื่อให้ผู้เรียนสามารถนำไปต่อยอดได้ในหลายๆอาชีพ',
    who_study:'ผู้ที่สนใจในการศิลปะ คอร์สนี้เหมาะสำหรับบุคคลที่มีความสนใจในการเรียนรู้ศิลปะพัฒนาทักษะทางศิลป์ผู้ที่ต้องการพัฒนาทักษะการวาดรูป: หากคุณสนใจในการเรียนรู้การวาดรูปเบื้องต้นและสร้างสรรค์ศิลปะ, คอร์สนี้จะช่วยให้คุณพัฒนาทักษะนี้ได้ผู้ที่มีเวลาอยู่บ้านและต้องการการสอนออนไลน์: คอร์สนี้เหมาะสำหรับคนที่มีเวลาว่างที่จะลงมือทำศิลปะ',
    knowledge:'ผู้เรียนไม่จำเป็นต้องมีความรู้อะไรมาก่อนในคอร์สนี้ เนื่องจากเป็นคอร์สเริ่มต้นที่เหมาะสำหรับผู้ที่ไม่มีพื้นฐานหรือความรู้ด้านศิลปะมาก่อน คุณจะได้รับคำแนะนำและการสอนเบื้องต้นจากคอร์สนี้ เพียงแค่คุณมีความสนใจและความกระตือรือร้นในการเรียนรู้และพัฒนาทักษะทางศิลปะพอแล้ว',
    caption:'',
    },{ 
    id: 4, name: 'Exercise Programp',
    img: "",
    detail:'การออกกำลังกายเบื้องต้นที่สามารถทำที่บ้านการฝึกหรือยกเลิกแรงกล้างสตรีทไปในการออกกำลังกายการเพิ่มความยืดหยุ่นและความแข็งแกร่งของกล้ามเนื้อ',
    wht_earn:'เพิ้อให้ผู้เรียนเข้าใจพื้นฐานของการออกกำลังกายที่ถูกต้อง เพื่มขีดจำกัดของร่างกาย เพื่มภูมิคุ้มกันให้เเข็งเเรงเเละสามารถต่อยอดให้กับผู้ที่สนใจจะเป็นนักกีฬา',
    who_study:'ผู้ที่สนใจในการออกกำลังกาย เพื่อสร้างสุขภาพที่ดีขึ้นและพัฒนาทักษะต่างๆผู้ที่ต้องการปรับปรุงสุขภาพร่างกาย: คอร์สนี้เหมาะสำหรับคนที่ต้องการออกกำลังกายเพื่อเพิ่มความแข็งแกร่งและความยืดหยุ่นของกล้ามเนื้อ, โดยไม่จำเป็นต้องไปยู่ในฟิตเนสหรือห้องออกกำลังกายผู้ที่มีเวลาอยู่บ้านและต้องการการสอนออนไลน์: คอร์สนี้เหมาะสำหรับคนที่มีเวลาว่างที่ออกกำลังกายโดยไม่ต้องเดินทางไปยุ่งกับคอร์สออฟไลน์.',
    knowledge:'ผู้เรียนไม่จำเป็นต้องมีความรู้อะไรมาก่อนในคอร์สนี้ เนื่องจากเป็นคอร์สเริ่มต้นที่เหมาะสำหรับผู้ที่ไม่มีพื้นฐานทางการออกกำลังกายมาก่อน คุณจะได้รับคำแนะนำและการสอนเบื้องต้นจากคอร์สนี้ เพียงแค่คุณมีความสนใจและความกระตือรือร้นในการเรียนรู้และพัฒนาทักษการออกกำลังกายคือพอแล้ว',
    caption:'',
    },
    ]);

    const prof_course = ref([
        {
            id:1, name:'',
            img:'',
            caption:'',
        }
    ]);

    const packageList= ref([
        {
          id: 1,
          price: 1290,
          day:'30',
          description1:'Average 43.-/day' ,
        },
        {
          id: 2,
          price: 1890,
          day:'60',
          description1:'Average 945.-/day' ,
        },
        {
          id: 3,
          price: 2790,
          day:'90',
          description1:'Average 930.-/day' ,
        },
        {
          id: 4,
          price: 3690,
          day:'120',
          description1:'Average 922.-/day' ,
        },
        {
          id: 5,
          price: 5390,
          day:'180',
          description1:'Average 898.-/day' ,
        },
        {
          id: 6,
          price: 9990,
          day:'365',
          description1:'Average 832.-/day' ,
        },
      ]);
      
      const data_dev = ref([
         {
          id:1,name:'Athit Fongkhaimuk',
          img:'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-6/347591755_274071744966932_7583192107895744012_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=rYHj1ErdVW4AX994bCZ&_nc_ht=scontent.fbkk13-1.fna&oh=00_AfAxM1kQo0w25jw8kKVeIpjLZ52gt6HXK9nY2v1F8pVaSg&oe=651FCB19'
          ,url:'https://poplme.co/G7lP22B1/share',
          text:''
         },{
          id:2,name:'Chaiyut Suntharote',
          img:'https://scontent.fbkk13-1.fna.fbcdn.net/v/t39.30808-1/365298108_4223788944514137_6778048245465402849_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeGDycP-0gBz9yKfdYrdjwKyy6XULzSrV6XLpdQvNKtXpdKI7y_g0d0Lh-1kNYeAQfuJhNbM8bmrtwnkw-vfmCsX&_nc_ohc=b3TFiebIsQcAX_8RP4_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbkk13-1.fna&_nc_e2o=s&oh=00_AfCsGbeFGhnGY_9tAlbtPyY-Nccy86WtEUnCzdvhQ55HSQ&oe=65255E4C',
          url:'https://poplme.co/GU4bLcu6/dash',
          text:''
         },{
          id:3,name:'',
          img:'https://scontent.fbkk13-3.fna.fbcdn.net/v/t39.30808-1/383981787_3609610726032141_3733299625779510283_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=fe8171&_nc_eui2=AeHHl--sEUJLPjskenPfYhrJlPQjDSylcF6U9CMNLKVwXmWl4tgV5zxVKv_SVGR0qNWkTmX0Yt-t-puchSM7RmBw&_nc_ohc=A07dxUFeg5wAX-sUAdp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fbkk13-3.fna&_nc_e2o=s&oh=00_AfCZz8XCSSboGEEdVpKlPQI5YxRBcWjZ0LvcPABkXRFuOQ&oe=6526BB60',
          url:'https://poplme.co/hash/FxjbYBMb/1/s',
          text:''
         },{
          id:4,name:'',
          img:'',
          url:'',
          text:''
         },{
          id:5,name:'',
          img:'',
          url:'',
          text:''
         },
      ])


    return { courseList, prof_course, packageList, data_dev }

});