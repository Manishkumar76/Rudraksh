// const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// AUTH ENDPOINTS
export const endpoints = {
	SENDOTP_API: "/api/auth/sendotp",
	SIGNUP_API: "/api/auth/signup",
	LOGIN_API: "/api/auth/login",
	RESETPASSTOKEN_API: "/api/auth/reset-password-token",
	RESETPASSWORD_API: "/api/auth/reset-password",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
	GET_USER_DETAILS_API: "/api/profile/getUserDetails",
	GET_USER_ENROLLED_COURSES_API: "/api/profile/getEnrolledCourses",
	GET_INSTRUCTOR_DATA_API: "/api/profile/instructorDashboard",
};

// STUDENTS ENDPOINTS
export const studentEndpoints = {
	COURSE_PAYMENT_API: "/api/payment/capturePayment",
	COURSE_VERIFY_API: "/api/payment/verifyPayment",
	SEND_PAYMENT_SUCCESS_EMAIL_API: "/api/payment/sendPaymentSuccessEmail",
};

// COURSE ENDPOINTS
export const courseEndpoints = {
	GET_ALL_COURSE_API: "/api/course/getAllCourses",
	COURSE_DETAILS_API: "/api/course/getCourseDetails",
	EDIT_COURSE_API: "/api/course/editCourse",
	COURSE_CATEGORIES_API: "/api/course/showAllCategories",
	CREATE_COURSE_API: "/api/course/createCourse",
	CREATE_SECTION_API: "/api/course/addSection",
	CREATE_SUBSECTION_API: "/api/course/addSubSection",
	UPDATE_SECTION_API: "/api/course/updateSection",
	UPDATE_SUBSECTION_API: "/api/course/updateSubSection",
	GET_ALL_INSTRUCTOR_COURSES_API: "/api/course/getInstructorCourses",
	DELETE_SECTION_API: "/api/course/deleteSection",
	DELETE_SUBSECTION_API: "/api/course/deleteSubSection",
	DELETE_COURSE_API: "/api/course/deleteCourse",
	GET_FULL_COURSE_DETAILS_AUTHENTICATED: "/api/course/getFullCourseDetails",
	LECTURE_COMPLETION_API: "/api/course/updateCourseProgress",
	CREATE_RATING_API: "/api/course/createRating",
};

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
	REVIEWS_DETAILS_API: "/api/course/getReviews",
};

// CATAGORIES API
export const categories = {
	CATEGORIES_API: "/api/course/showAllCategories",
};

// CATALOG PAGE DATA
export const catalogData = {
	CATALOGPAGEDATA_API: "/api/course/getCategoryPageDetails",
};
// CONTACT-US API
export const contactusEndpoint = {
	CONTACT_US_API: "/api/reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
	UPDATE_DISPLAY_PICTURE_API: "/api/profile/updateUserProfileImage",
	UPDATE_PROFILE_API: "/api/profile/updateProfile",
	CHANGE_PASSWORD_API: "/api/auth/changepassword",
	DELETE_PROFILE_API: "/api/profile/deleteProfile",
};
