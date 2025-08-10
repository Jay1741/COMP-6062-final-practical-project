console.log("Let's get started with Vue.js!");

const app = Vue.createApp({
    data() {
        return {
            userData: [],
            weather: [],
            dictionary: [],
            wordInput: [],       
            city: 'London',
            province: 'Ontario',
            country: 'Canada',           
        };
    },
    computed: {},
    methods: {
        getuserProfileData() {
            fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.userData = data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        getWeatherData() {
      
         
            fetch (`https://comp6062.liamstewart.ca/weather-data?city=${this.city}&province=${this.province}&country=${this.country}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.weather = data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        getDictionaryData() {
            fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.wordInput}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.dictionary = data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getuserProfileData();
        this.getWeatherData();
    }
});

app.mount('#app');
