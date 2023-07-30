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
      <div class='locationCityRecommendations'>
      <input type='radio'> London</div>
            <div class='locationCityRecommendations'>
      <input type='radio'> Berlin</div>      <div class='locationCityRecommendations'>
      <input type='radio'> Amsterdam</div>      <div class='locationCityRecommendations'>
      <input type='radio'> Paris</div>
    </div>
  </div>

  <p class="devInfo">Project created by Ioana P. in Vue for devChallenges.io</p>
</template>

<script>
export default {
  name: 'LandingPage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
