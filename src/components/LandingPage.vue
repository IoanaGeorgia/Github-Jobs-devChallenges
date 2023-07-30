<template>
  <div class="searchArea">
    <div class="inputWrapper">
      <span class="material-icons-outlined" style="color: gray; font-size: 21px"
        >work_outline</span
      >
      <input
        class="mainSearchInput"
        placeholder="Title, companies, expertise or benefits"
      />
      <button class="mainSearchButton">Search</button>
    </div>
  </div>

  <div class="searchResultsArea">
    <div class="advancedSearch">
      <span class="fullTimeWrapper"><input type="checkbox" /> Full time</span>

      <div class="locationSearchWrapper">
        <p class="locationSearchLabel">Location</p>

        <span class="locationInputWrapper">
          <span
            class="material-icons-outlined"
            style="color: gray; font-size: 21px"
          >
            public
          </span>
          <input
            class="locationInput"
            placeholder="City, state, zip code or country"
          />
        </span>
      </div>
      <div class="locationCityRecommendations">
        <input type="radio" /> London
      </div>
      <div class="locationCityRecommendations">
        <input type="radio" /> Berlin
      </div>
      <div class="locationCityRecommendations">
        <input type="radio" /> Amsterdam
      </div>
      <div class="locationCityRecommendations">
        <input type="radio" /> Paris
      </div>
    </div>
</div>



<div class='results'>
<!-- {{jobs}} -->

<div class='result'>

<span class='infoWrapper'>
<div class='resultTags'>
<div v-for="i in jobs.tags" class='resultTag'>{{i}}
</div>
</div>

<div class='resultInfo'>
<div class='resultCompany'>{{jobs.company_name}}</div>
<div class='resultTitle'>{{jobs.title}}</div>
<div class='remote' v-if='jobs.remote'>Remote</div>
</div>
</span>
<div class='resultLocation'>  
<span><span
            class="material-icons-outlined"
            style="color: gray; font-size: 21px; margin-right:5px"
          >
            public
          
          </span>{{jobs.location}}</span>
          <span>
          <span
            class="material-icons-outlined"
            style="color: gray; font-size: 21px;  margin-right:5px"
          >
            watch_later
          
          </span>
          
          <span v-if='daysAgo(jobs.created_at)'>{{daysAgo(jobs.created_at)}}</span>
          <span v-else>Today</span>
          </span>
          
</div>

</div>

</div>

</div>

</div>

</div>

</div>

<!-- <div>{{jobs.company_name}}</div> -->
<!-- <div>{{jobs.title}}</div> -->
<div>{{jobs.remote}}</div>
<div>{{jobs.location}}</div>
<!-- <div>{{jobs.tags}}</div> -->

<!-- </div>

  </div> -->


  <p class="devInfo">Project created by Ioana P. in Vue for devChallenges.io</p>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.getJobs();
  },
  methods: {
    daysAgo(timestamp){
  const currentTimestamp = Date.now() / 1000;
  const differenceInSeconds = currentTimestamp - timestamp;
  const secondsInADay = 60 * 60 * 24;
  const daysAgo = Math.floor(differenceInSeconds / secondsInADay);
  return daysAgo;
    },
   async getJobs() {
const url = 'https://www.arbeitnow.com/api/job-board-api'

try {
	const response = await fetch(url);
	const result = await response.json();
	console.log(result.data);
  this.jobs = result.data[0]
} catch (error) {
	console.error(error);
}
   }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
