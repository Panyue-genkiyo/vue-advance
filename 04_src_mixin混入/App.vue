<template>
   <div>
      <Student />
      <hr/>
     <School/>
   </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: "App",
  components:{
    School,
    Student,
  },
}
</script>

