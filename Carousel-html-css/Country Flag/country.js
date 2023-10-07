const countries =  [
    {
        name: "Argentina",
        dial_code: "+54",
        code: "AR",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Armenia",
        dial_code: "+374",
        code: "AM",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Australia",
        dial_code: "+61",
        code: "AU",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Austria",
        dial_code: "+43",
        code: "AT",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Belgium",
        dial_code: "+32",
        code: "BE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Brazil",
        dial_code: "+55",
        code: "BR",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Bulgaria",
        dial_code: "+359",
        code: "BG",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Burkina Faso",
        dial_code: "+226",
        code: "BF",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Canada",
        dial_code: "+1",
        code: "CA",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },

    {
        name: "Chile",
        dial_code: "+56",
        code: "CL",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "China",
        dial_code: "+86",
        code: "CN",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },

    {
        name: "Colombia",
        dial_code: "+57",
        code: "CO",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Congo",
        dial_code: "+242",
        code: "CG",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Czech Republic",
        dial_code: "+420",
        code: "CZ",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Denmark",
        dial_code: "+45",
        code: "DK",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Djibouti",
        dial_code: "+253",
        code: "DJ",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Egypt",
        dial_code: "+20",
        code: "EG",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Estonia",
        dial_code: "+372",
        code: "EE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Finland",
        dial_code: "+358",
        code: "fi",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "France",
        dial_code: "+33",
        code: "FR",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Germany",
        dial_code: "+49",
        code: "DE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Hungary",
        dial_code: "+36",
        code: "HU",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "India",
        dial_code: "+91",
        code: "IN",
        maxLength: 10, // Maximum length of the dial_code
        minLength: 10, // Minimum length of the dial_code
        errorMessage: "Dial code must be 10 characters long",
    },
    {
        name: "Indonesia",
        dial_code: "+62",
        code: "ID",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Iran, Islamic Republic of Persian Gulf",
        dial_code: "+98",
        code: "IR",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Ireland",
        dial_code: "+353",
        code: "IE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Israel",
        dial_code: "+972",
        code: "IL",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Italy",
        dial_code: "+39",
        code: "IT",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Japan",
        dial_code: "+81",
        code: "JP",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Kenya",
        dial_code: "+254",
        code: "KN",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Korea, Democratic People's Republic of Korea",
        dial_code: "+850",
        code: "KP",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Korea, Republic of South Korea",
        dial_code: "+82",
        code: "KR",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Kuwait",
        dial_code: "+965",
        code: "KW",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Latvia",
        dial_code: "+371",
        code: "LV",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Luxembourg",
        dial_code: "+352",
        code: "LU",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Mexico",
        dial_code: "+52",
        code: "MX",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Netherlands",
        dial_code: "+31",
        code: "NL",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Norway",
        dial_code: "+47",
        code: "NO",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Oman",
        dial_code: "+968",
        code: "OM",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Pakistan",
        dial_code: "+92",
        code: "PK",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Paraguay",
        dial_code: "+595",
        code: "PY",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Peru",
        dial_code: "+51",
        code: "PE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Poland",
        dial_code: "+48",
        code: "PL",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Portugal",
        dial_code: "+351",
        code: "PT",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Qatar",
        dial_code: "+974",
        code: "QA",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Romania",
        dial_code: "+40",
        code: "RO",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Russia",
        dial_code: "+7",
        code: "RU",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Saudi Arabia",
        dial_code: "+966",
        code: "SA",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Singapore",
        dial_code: "+65",
        code: "SG",
        maxLength: 8, // Maximum length of the dial_code
        minLength: 8, // Minimum length of the dial_code
        errorMessage: "Dial code must be 8 characters long",
    },
    {
        name: "Spain",
        dial_code: "+34",
        code: "ES",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Sweden",
        dial_code: "+46",
        code: "SE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "Switzerland",
        dial_code: "+41",
        code: "CH",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "United Arab Emirates",
        dial_code: "+971",
        code: "AE",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "United Kingdom",
        dial_code: "+44",
        code: "GB",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
    {
        name: "United States",
        dial_code: "+1",
        code: "US",
        maxLength: 3, // Maximum length of the dial_code
        minLength: 3, // Minimum length of the dial_code
        errorMessage: "Dial code must be 3 characters long",
    },
]

const countryDropdown = document.getElementById("countryDropdown");
const dialCodeInput = document.getElementById("dialCodeInput");
const maxLengthInput = document.getElementById("dialPad");
const minLengthInput = document.getElementById("minLength");
const errorMessageInput = document.getElementById("errorMessage");

// Populate the dropdown with country names and dial codes
countries.forEach(country => {
    const option = document.createElement("option");
    console.info(country);
    option.value = country.dial_code;
    option.textContent = `${country.name} ${country.dial_code}`;
    countryDropdown.appendChild(option);
    
});

// Add event listener to update input fields when a country is selected
countryDropdown.addEventListener("change", function () {
    const selectedCountryCode = this.value;
    const selectedCountry = countries.find(country => country.dial_code === selectedCountryCode);

    if (selectedCountry) {
        dialCodeInput.value = selectedCountry.dial_code;
        maxLengthInput.maxLength = selectedCountry.maxLength;
        maxLengthInput.minLength = selectedCountry.minLength;
        errorMessageInput.innerHTML = selectedCountry.errorMessage;
    } else {
        dialCodeInput.value = "";
        maxLengthInput.value = "";
        minLengthInput.value = "";
        errorMessageInput.innerHTML = "";
    }
});
