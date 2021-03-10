/* eslint-disable no-unreachable */
import axios from 'axios';

//change port

export const registerUser = userData => {
    // console.log(userData);
    return axios
        .post('/api/register', {
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            password: userData.password
        })
        .then(res => {
            return res;
            console.log('Registered!');
        })
}

export const loginUser = userData => {
    // console.log(userData);
    return axios
        .post('/api/login', {
            email: userData.email,
            password: userData.password
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const getUsers = () => {
    // debugger;
    return axios
        .get('/api/displayauthors', {
        })
        .then(response => {
            console.log(response);

            // console.log(userData);  
            return response
        })
        .catch(err => {
            console.log(err);
        })
}

export const getStudents = () => {
    // debugger;
    return axios
        .get('/api/students', {
        })
        .then(response => {
            console.log(response);

            // console.log(userData);  
            return response
        })
        .catch(err => {
            console.log(err);
        })
}

export const getOneStudent = (LastNameForFunction) => {
    // debugger;
    return axios
        .get('/api/Students/' + LastNameForFunction, {
        })
        .then(response => {
            console.log(response);

            // console.log(userData);  
            return response
        })
        .catch(err => {
            console.log(err);
        })
}

export const getOneClientByLastName = LastNameForFunction => {
    // console.log(userData);
    return axios
        .get('/api/users/name/' + LastNameForFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })


}




export const addStudent = (userData) => {
    // debugger;
    return axios
        .post('/api/Students', {

            first_name: userData.first_name,
            last_name: userData.last_name,
            phone: userData.phone,
            email_pers: userData.email_pers,
            email_work: userData.email_work,
            training_phase: userData.training_phase,
            exam_stage: userData.exam_stage,
            pediatrics_term: userData.pediatrics_term,
            ICU_term: userData.ICU_term,
            anesthetics_term: userData.anesthetics_term,
            retrieval_term: userData.retrieval_term,
            associated_DEMT: userData.associated_DEMT,
            improvement_area_1: userData.improvement_area_1,
            improvement_area_2: userData.improvement_area_2,
            improvement_area_3: userData.improvement_area_3,
            photo_URL: userData.photo_URL,

        })
        .then(response => {
            console.log(response);

            // console.log(userData);  
            return response
        })
        .catch(err => {
            console.log(err);
        })
}

export const addPost = (userData) => {
    // debugger;
    return axios
        .post('/api/feedback', {

            type: userData.type,
            StudentId: userData.StudentId,
            time_date: userData.time_date,
            global_assessment: userData.global_assessment,
            prioritisation_decision_making: userData.prioritisation_decision_making,
            professionalism: userData.professionalism,
            scholarship_teaching: userData.scholarship_teaching,
            teamwork_collaboration: userData.teamwork_collaboration,
            leadership_management: userData.leadership_management,
            health_advocacy: userData.health_advocacy,
            communication: userData.communication,
            sick_calls: userData.sick_calls,
            body: userData.body,
            AuthorId: userData.AuthorId


        })
        .then(response => {
            console.log(response);

            // console.log(userData);  
            return response
        })
        .catch(err => {
            console.log(err);
        })
}



export const inputClientAssets = userData => {
    // console.log(userData);
    return axios
        .post('/api/assets', {

            principalResidence: userData.principalResidence,
            investmentProperty: userData.investmentProperty,
            homeContents: userData.homeContents,
            primaryCar: userData.primaryCar,
            secondaryCar: userData.secondaryCar,
            cashInBank: userData.cashInBank,
            managedFund: userData.managedFund,
            sharePortfolio: userData.sharePortfolio,
            caravanCamper: userData.caravanCamper,
            boatWatercraft: userData.boatWatercraft,
            otherMachinery: userData.otherMachinery,
            otherAsset: userData.otherAsset,
            UserId: userData.UserId

        })
        .then(res => {
            return res;
            console.log('Assets Updates!');
        })

}


export const inputFeedback = userData => {
    // console.log(userData);
    return axios
        .post('/api/feedback', {

            type: userData.type,
            StudentID: userData.StudentID,
            time_date: userData.time_date,
            global_assessment: userData.global_assessment,
            area_for_improvement1: userData.area_for_improvement1,
            area_for_improvement2: userData.area_for_improvement2,
            area_for_improvement3: userData.area_for_improvement3,
            area_for_improvement4: userData.area_for_improvement4,
            area_for_improvement5: userData.area_for_improvement5,
            area_for_improvement6: userData.area_for_improvement6,
            area_for_improvement7: userData.area_for_improvement7,
            sick_calls: userData.sick_calls,
            body: userData.body,

        })
        .then(res => {
            return res;
            console.log('Feedback Updated!');
        })

}


export const inputClientLiabilities = userData => {
    // console.log(userData);
    return axios
        .post('/api/liabilities', {

            homeMortgage: userData.homeMortgage,
            investmentPropertyLoans: userData.investmentPropertyLoans,
            personalLoans: userData.personalLoans,
            creditCards: userData.creditCards,
            payDayLending: userData.payDayLending,
            carLoan: userData.carLoan,
            otherLoans: userData.otherLoans,
            UserId: userData.UserId

        })
        .then(res => {
            return res;
            console.log('Liabilities Updates!');
        })
}

export const inputClientExpenses = userData => {
    // console.log(userData);
    return axios
        .post('/api/expenses', {


            mortgage_repayments: userData.mortgage_repayments,
            rent: userData.rent,
            council_rates: userData.council_rates,
            land_tax: userData.land_tax,
            electricity_utilities: userData.electricity_utilities,
            investment_property_costs: userData.investment_property_costs,
            telephone_internet: userData.telephone_internet,
            groceries: userData.groceries,
            recreation_entertainment: userData.recreation_entertainment,
            clothing_personal_care: userData.clothing_personal_care,
            medical_health: userData.medical_health,
            transport: userData.transport,
            education: userData.education,
            childcare: userData.childcare,
            insurance: userData.insurance,
            child_maintenance: userData.child_maintenance,
            other_Expenses: userData.other_Expenses,
            UserId: userData.UserId



        })
        .then(res => {
            return res;
            console.log('Expenses Updates!');
        })
}

export const inputClientParticulars = userData => {
    // console.log(userData);
    return axios
        .put('/api/particulars/' + userData.email, {

            email: userData.email,
            first_name: userData.first_name,
            last_name: userData.last_name,
            salutation: userData.salutation,
            preferredName: userData.preferredName,
            date_of_birth: userData.date_of_birth,
            sex: userData.sex,
            marital_status: userData.marital_status,
            tax_resident: userData.tax_resident,
            citizen: userData.citizen,
            country_of_origin: userData.country_of_origin,
            preservation_age: userData.preservation_age,
            age_pension_age: userData.age_pension_age,
            address: userData.address,
            mobile: userData.mobile,
            home_phone: userData.home_phone,
            work_phone: userData.work_phone,


        })
        .then(res => {
            return res;
            console.log('Particulars Updated!');
        })
}

export const inputClientIncome = userData => {
    // console.log(userData);
    return axios
        .post('/api/income', {

            employment_type: userData.employment_type,
            industry: userData.industry,
            primary_income: userData.primary_income,
            secondary_income: userData.secondary_income,
            centrelink_payments: userData.centrelink_payments,
            dva_payments: userData.dva_payments,
            superannuation_payments: userData.superannuation_payments,
            rental_income: userData.rental_income,
            other_income: userData.other_income,
            UserId: userData.UserId


        })
        .then(res => {
            return res;
            console.log('Income Updated!');
        })
}

export const getOneClientByEmail = emailForFunction => {
    // console.log(userData);
    return axios
        .get('/api/users/' + emailForFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })


}

export const getOneStudentByLastName = LastNameForFunction => {
    // console.log(userData);
    return axios
        .get('/api/Students/' + LastNameForFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })


}

export const getClientAssetsData = UserIDforFunction => {
    // console.log(userData);
    return axios
        .get('/api/assets/' + UserIDforFunction, {
        }).then(assetsresponse => {
            return assetsresponse
            console.log(assetsresponse);

        })
        .catch(err => {
            console.log(err);
        })

}

export const getOneStudentFeedback = UserIDforFunction => {
    // console.log(userData);
    return axios
        .get('/api/posts/' + UserIDforFunction, {
        }).then(assetsresponse => {
            return assetsresponse
            console.log(assetsresponse);

        })
        .catch(err => {
            console.log(err);
        })

}

export const getClientLiabilitiesData = UserIDforFunction => {
    // console.log(userData);
    return axios
        .get('/api/liabilities/' + UserIDforFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })
}

export const getClientIncomeData = UserIDforFunction => {
    // console.log(userData);
    return axios
        .get('/api/income/' + UserIDforFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })

}

export const getClientExpensesData = UserIDforFunction => {
    // console.log(userData);
    return axios
        .get('/api/expenses/' + UserIDforFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })


}

export const getClientParticulars = UserIDforFunction => {
    // console.log(userData);
    return axios
        .get('/api/particulars/' + UserIDforFunction, {
        }).then(response => {
            return response
            console.log(response);

        })
        .catch(err => {
            console.log(err);
        })


}
