import { defineStore } from "pinia";
//import { ref } from "vue";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export const alertStore = defineStore('alertStore', () => {
    
    const alert_buy = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Generate Keys Complete',
            showConfirmButton: false,
            timer: 1500
          })
    }



    return { alert_buy }
}) 