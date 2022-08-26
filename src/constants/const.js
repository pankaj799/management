import moment from "moment"

export const base_url  = "https://api.solidappmaker.ga:5026/api/v1/"
export const img_url   = "https://api.solidappmaker.ga:5026/files/"
export const TOKEN_VAR = "myEdPrePToken"

// export const base_url = "http://localhost:3000/api/v1/"
// export const img_url = "http://localhost:3000/files/"



export const  getDate = () => {
    return false
}

export const getGradeValue = (grade) => {
    let w = 0;
    switch (grade) {
        case "A+":
            w = 4.33;
            break;
        case "A":
            w = 4;
            break;
        case "A-":
            w = 3.67;
            break;
        case "B+":
            w = 3.33;
            break;
        case "B":
            w = 3;
            break;
        case "B-":
            w = 2.67;
            break;
        case "C+":
            w = 2.33;
            break;
        case "C":
            w = 2;
            break;
        case "C-":
            w = 1.67;
            break;
        case "D+":
            w = 1.33;
            break;
        case "D":
            w = 1;
            break;
        case "D-":
            w = 0.67;
            break;
        default:
            w = 0;
    }
    return w;
}

export const getDiff = (time) => {
    let resolutionTime = moment().unix() - time
    if (resolutionTime < 60) {
        return 'just now'
    }
    else if ((resolutionTime / 60) < 60) {
        return parseInt(resolutionTime / 60) + 'm ago'
    }
    else if (((resolutionTime / 60) / 60) < 24) {
        return parseInt(resolutionTime / 60 / 60) + 'h ago'
    }
    else if ((((resolutionTime / 60) / 60) / 24) < 30) {
        return parseInt(resolutionTime / 60 / 60 / 24) + 'd ago'
    }
    else if (((((resolutionTime / 60) / 60) / 24) / 30) < 12) {
        return Math.round((((resolutionTime / 60) / 60) / 24) / 30) + "m ago"
    }
    else {
        return Math.round(((((resolutionTime / 60) / 60) / 24) / 30) / 12) + "y ago"
    }
}

export const randomStr = (len, arr) => {
    var digits = arr;
    let OTP = '';
    for (let i = 0; i < len; i++) {
        OTP += digits[Math.floor(Math.random() * arr.length)];
    }
    if (OTP.length < len || OTP.length > len) {
        randomStr(len, arr);
    }
    return (OTP);
}