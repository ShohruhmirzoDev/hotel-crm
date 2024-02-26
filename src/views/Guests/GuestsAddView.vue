<template>
     <div class="bg-white p-5">
    <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Ism</label
        >
        <input
          type="text"
          placeholder="Ism"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Familiya</label
        >
        <input
          type="text"
          placeholder="Familiya"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Otasini ismi</label
        >
        <input
          type="text"
          placeholder="Otasining ismi"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

       <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Telfon Raqam</label
        >
        <input
          type="Phone"
          placeholder="UZ (+99)"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Tug'ilgan sanasi</label
        >
        <input
          type="date"
          placeholder="Password"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium  text-gray-700"
          >Jinsi</label
        >
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Erkak</option>
          <option value="US">Ayol</option>
        </select>
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Pasport</label
        >
        <input
          type="text"
          placeholder=" AA 12 34 456"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Berilgan sanasi</label
        >
        <input
          type="date"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

       <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >Kim tomonidan berilgan</label
        >
        <input
          type="text"
          placeholder="Kim tomonidan berilgan"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      
    </div>


     <div class="my-8 w-1/2">
      <div class="">
        <label class="block mb-2 text-sm font-medium text-gray-700"
          >YASHASH Manzil</label
        >
        <input
          type="text"
          placeholder="Yashash joyi"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>





    
      

     

      

     

      

      
    </div>



    <div class=" bg-white shadow-xl p-5 my-8">
         <div class="flex items-end">
        <div class="w-full">
            <label class="block mb-2 text-sm font-medium text-gray-700"
          >Search</label
        >
        <input
          type="search"
          placeholder=" Search"
          class="block w-full p-2 text-md  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        </div>
       <button class="text-white h-11 ml-2 bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5  ">Add</button>
      </div>

      <div class=" border border-gray-400 rounded-lg mt-1 p-3 text-gray-600 overflow-y-scroll">
        <p class="hover:bg-blue-700 hover:text-white p-1 pl-2">One</p>
        <p class="hover:bg-blue-700 hover:text-white p-1 pl-2">Two</p>
        <p class="hover:bg-blue-700 hover:text-white p-1 pl-2">Two</p>
        <p class="hover:bg-blue-700 hover:text-white p-1 pl-2">Two</p>
      </div>


      <div class="border border-gray-100 rounded-lg mt-4 p-5 py-12 text-gray-600 ">
        <div class="">
        <label class="block mb-2 text-xs font-medium text-gray-700"
          >TASHKILOT NOMI</label
        >
        <input
          type="text"
          placeholder="Tashkilot nomi"
          class="block w-full p-2 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

        <div class=" my-5">
        <label class="block mb-2 text-xs font-medium text-gray-700"
          >MANZIL</label
        >
        <input
          type="text"
          placeholder="Manzil"
          class="block w-full p-2 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="grid xl:grid-cols-3 lg:grid-cols-2 gap-5">

        <div class="">
        <label class="block mb-2 text-xs font-medium text-gray-700"
          >INN</label
        >
        <input
          type="text"
          placeholder="AA 00 12 362"
          class="block w-full p-2 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-xs font-medium text-gray-700"
          >DEREKTOR ISM FAMILIYA</label
        >
        <input
          type="text"
          placeholder="Ism Familiya"
          class="block w-full p-2 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div class="">
        <label class="block mb-2 text-xs font-medium text-gray-700"
          >TEL NUMBER</label
        >
        <input
          type="number"
          placeholder="Tel:"
          class="block w-full p-2 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
        

      </div>
      </div>

    </div>

   

    <div class="">
      <label class="block mb-2 text-sm font-medium text-gray-700"
        >Qo'shimcha malumotlar</label
      >
      <textarea
        class="w-full h-[150px] rounded-lg border border-gray-300"
        placeholder="Qo'shimcha Izoh.."
      ></textarea>
    </div>

    <div class="text-center mt-12">
      <RouterLink to="/guests" class="bg-transparent">
        <button
          type="button"
          class="text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Back
        </button>
      </RouterLink>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 border-2 border-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
</div>


</template>


<script setup>

</script>
