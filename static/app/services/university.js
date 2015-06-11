myApp.service('UniversityService', function() {


	var UniversityService = {
		// Constants Endpoints URL to get data collections to frontEnd and 
		GET_UNIVERSITIES: ''
	};
	
	var availableUniversities = [
	{id: 1, section : "HardvardUniversity", pageTitle : "Essential Guide", name : "Hardvard Bussiness School", pageViews : "1925"},
	{id: 2, section : "MTIBusinessSchool", pageTitle : "Primary Guide", name : "MTI Business School", pageViews : "152"},
	{id: 3, section : "HowardsBusinessSchool", pageTitle : "Howards Guide", name : "Howards Business School", pageViews : "8568"},
	{id: 4, section : "AnotherSchool", pageTitle : "Another School Guide", name : "Another Business School", pageViews : "848"}
	];
	
	/**
	 * Get Universities
	 */
	this.getUniversities = function(params){
		// Call via API backend service
		var universities = [
	      {id: 1, name: "Hardvard Business School", section: "HardvardUniversity", logo: "", selected: false, sections: [{sectionName: "Snapshot", url: '/snapshot'},{sectionName: "Academics", url: '/academics'},{sectionName: "Employment", url: '/employment'}, {sectionName: "Culture", url: '/culture'},{sectionName: "Admisions", url: '/admisions'},{sectionName: "Others", url: '/others'}]},
	      {id: 2, name: "MTI Business School", section: "MTIBusinessSchool", logo: "", selected: false, sections: [{sectionName: "Snapshot", url: '/snapshot'},{sectionName: "Academics", url: '/academics'},{sectionName: "Employment", url: '/employment'}, {sectionName: "Culture", url: '/culture'},{sectionName: "Admisions", url: '/admisions'},{sectionName: "Others", url: '/others'}]},
	      {id: 3, name: "Howards Business School", section: "HowardsBusinessSchool", logo: "", selected: false, sections: [{sectionName: "Snapshot", url: '/snapshot'},{sectionName: "Academics", url: '/academics'},{sectionName: "Employment", url: '/employment'}, {sectionName: "Culture", url: '/culture'},{sectionName: "Admisions", url: '/admisions'},{sectionName: "Others", url: '/others'}]},
	      {id: 4, name: "Another School Guide", section: "AnotherSchool", logo: "", selected: false, sections: [{sectionName: "Snapshot", url: '/snapshot'},{sectionName: "Academics", url: '/academics'},{sectionName: "Employment", url: '/employment'}, {sectionName: "Culture", url: '/culture'},{sectionName: "Admisions", url: '/admisions'}]},
	    ];

		return universities;		
	};


	this.getCurrentUniversityData = function(universitySection){
		// Call via API backend service
		var currentUniversityData =  _.findWhere(availableUniversities,{section:universitySection});
		if(typeof currentUniversityData === "undefined" && !currentUniversityData) 					
			currentUniversityData = availableUniversities[0];
		currentUniversityData.selected = true;
		return currentUniversityData;		
	};


	

});