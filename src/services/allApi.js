
import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

// save vedio Api - post http request, Add.jsx component

export const saveVedioAPI = async (vedioDeatils) =>{
   return await commonAPI(`POST`,`${SERVERURL}/uploadVedios`,vedioDeatils)

}

// getVediosAPI -GET method called by view component. when cmponent displayed in browsor inside its useEffect Hook

export const getAllVediosAPI  = async () =>{
   return await commonAPI(`GET`,`${SERVERURL}/uploadVedios`,"")

}
//saveHistroyApi -post http method to history called by vediocard when we click on vedio
export const saveHistroyApi  = async (historydetails) =>{
   return await commonAPI(`POST`,`${SERVERURL}/history`,historydetails)

}
// getAllHistoryApi - get http request to http://localhost:3000/history called by history component when it open on browser
export const getAllHistoryApi  = async () =>{
   return await commonAPI(`GET`,`${SERVERURL}/history`,"")
}

//deleteHistoryApi -delete method to http://localhost:3000/history/id call by history component when clicked on delete button

export const deleteHistoryApi  = async (id) =>{
   return await commonAPI(`DELETE`,`${SERVERURL}/history/${id}`,{})
}
// removeVedioAPI - delete method to  http://localhost:3000/uploadVedios/id called bu vwdiocard when clicked when clicked on delete button
export const removeVedioAPI  = async (id) =>{
   return await commonAPI(`DELETE`,`${SERVERURL}/uploadVedios/${id}`,{})
}

// saveCategoryAPI - post request http://localhost:3000/category called by category component whwn user click on add btn
// catgoryDetails = {categoryName,allVedio}
export const saveCategoryAPI  = async (categoryDetails) =>{
   return await commonAPI(`POST`,`${SERVERURL}/category`,categoryDetails)
}

//getCategoryApi - get method http://localhost:3000/category called by category component when component loaded in browser
export const getCategoryApi  = async () =>{
   return await commonAPI(`GET`,`${SERVERURL}/category`,"")
}
//deletecategoryAPI - delete method to http://localhost:3000/category/id called by category cpmponent when clicked on delete button
export const deletecategoryAPI  = async (id) =>{
   return await commonAPI(`DELETE`,`${SERVERURL}/category/${id}`,{})
}

// updatecategoryApi - put method to http://localhost:3000/category/id called by category component when vedio drop over the category
export const updatecategoryAPI  = async (categoryDetails) =>{
   return await commonAPI(`PUT`,`${SERVERURL}/category/${categoryDetails.id}`,categoryDetails)
}