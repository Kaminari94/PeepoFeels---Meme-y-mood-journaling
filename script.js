var app = angular.module('emoApp', ["chart.js", "datatables", "datatables.buttons"]);

const emotionData = {
            emotions: [
                {
                    name: "Anger",
                    img: 'assets/emotions/anger.png',
                    level: 1,
                    subemotions: [
                        {
                            name: "Rage",
                            level: 2,
                            subemotions: [
                                {name: "Hostile", level: 3},
                                {name: "Hate", level: 3}
                            ]
                        },
                        {
                            name: "Exasperated", 
                            level: 2,
                            subemotions: [
                                {name: "Frustrated", level: 3},
                                {name: "Agitated", level: 3}
                            ]
                        },
                        {
                            name: "Irritated",
                            level: 2,
                            subemotions: [
                                {name: "Aggravated", level: 3},
                                {name: "Annoyed", level: 3}
                            ]
                        },
                        {
                            name: "Envy",
                            level: 2,
                            subemotions: [
                                {name: "Resentful", level: 3},
                                {name: "Jealous", level: 3}
                            ]
                        },
                        {
                            name: "Disgust",
                            level: 2,
                            subemotions: [
                                {name: "Contempt", level: 3},
                                {name: "Revolted", level: 3}
                            ]
                        }
                    ]
                },
                {
                    name: "Sadness",
                    img: 'assets/emotions/sadness.png',
                    level: 1,
                    subemotions: [
                        {
                            name: "Suffering",
                            level: 2,
                            subemotions: [
                                {name: "Agony", level: 3},
                                {name: "Hurt", level: 3}
                            ]
                        },
                        {
                            name: "Sadness",
                            level: 2,
                            subemotions: [
                                {name: "Depressed", level: 3},
                                {name: "Sorrow", level: 3}
                            ]
                        },
                        {
                            name: "Disappointed",
                            level: 2,
                            subemotions: [
                                {name: "Dismayed", level: 3},
                                {name: "Displeased", level: 3}
                            ]
                        },
                        {
                            name: "Shameful",
                            level: 2,
                            subemotions: [
                                {name: "Regretful", level: 3},
                                {name: "Guilty", level: 3}
                            ]
                        },
                        {
                            name: "Neglected",
                            level: 2,
                            subemotions: [
                                {name: "Isolated", level: 3},
                                {name: "Lonely", level: 3}
                            ]
                        },
                        {
                            name: "Despair",
                            level: 2,
                            subemotions: [
                                {name: "Grief", level: 3},
                                {name: "Powerless", level: 3}
                            ]
                        }
                    ]
                },
                {
                    name: "Surprise",
                    img: 'assets/emotions/surprise.png',
                    level: 1,
                    subemotions: [
                        {
                            name: "Stunned",
                            level: 2,
                            subemotions: [
                                {name: "Shocked", level: 3},
                                {name: "Dismay", level: 3}
                            ]
                        },
                        {
                            name: "Confused",
                            level: 2,
                            subemotions: [
                                {name: "Disillusioned", level: 3},
                                {name: "Perplexed", level: 3}
                            ]
                        },
                        {
                            name: "Amazed",
                            level: 2,
                            subemotions: [
                                {name: "Astonished", level: 3},
                                {name: "Awe-struck", level: 3}
                            ]
                        },
                        {
                            name: "Overcome",
                            level: 2,
                            subemotions: [
                                {name: "Speechless", level: 3},
                                {name: "Astounded", level: 3}
                            ]
                        },
                        {
                            name: "Moved",
                            level: 2,
                            subemotions: [
                                {name: "Stimulated", level: 3},
                                {name: "Touched", level: 3}
                            ]
                        }
                    ]
                },
                {
                    name: "Joy",
                    img: 'assets/emotions/joy.png',
                    level: 1,
                    subemotions: [
                        {
                            name: "Content",
                            level: 2,
                            subemotions: [
                                {name: "Pleased", level: 3},
                                {name: "Satisfied", level: 3}
                            ]
                        },
                        {
                            name: "Happy",
                            level: 2,
                            subemotions: [
                                {name: "Amused", level: 3},
                                {name: "Delighted", level: 3}
                            ]
                        },
                        {
                            name: "Cheerful",
                            level: 2,
                            subemotions: [
                                {name: "Jovial", level: 3},
                                {name: "Blissful", level: 3}
                            ]
                        },
                        {
                            name: "Proud",
                            level: 2,
                            subemotions: [
                                {name: "Triumphant", level: 3},
                                {name: "Illustrious", level: 3}
                            ]
                        },
                        {
                            name: "Optimistic",
                            level: 2,
                            subemotions: [
                                {name: "Eager", level: 3},
                                {name: "Hopeful", level: 3}
                            ]
                        },
                        {
                            name: "Enthusiastic",
                            level: 2,
                            subemotions: [
                                {name: "Excited", level: 3},
                                {name: "Zeal", level: 3}
                            ]
                        },
                        {
                            name: "Elation",
                            level: 2,
                            subemotions: [
                                {name: "Euphoric", level: 3},
                                {name: "Jubilation", level: 3}
                            ]
                        },
                        {
                            name: "Enthralled",
                            level: 2,
                            subemotions: [
                                {name: "Rapture", level: 3},
                                {name: "Enchanted", level: 3}
                            ]
                        }
                    ]
                },
                {
                    name: "Love",
                    img: 'assets/emotions/love.png',
                    level: 1,
                    subemotions: [
                        {
                            name: "Affectionate",
                            level: 2,
                            subemotions: [
                                {name: "Romantic", level: 3},
                                {name: "Fondness", level: 3}
                            ]
                        },
                        {
                            name: "Longing",
                            level: 2,
                            subemotions: [
                                {name: "Sentimental", level: 3},
                                {name: "Attracted", level: 3}
                            ]
                        },
                        {
                            name: "Desire",
                            level: 2,
                            subemotions: [
                                {name: "Passion", level: 3},
                                {name: "Infatuation", level: 3}
                            ]
                        },
                        {
                            name: "Tenderness",
                            level: 2,
                            subemotions: [
                                {name: "Compassionate", level: 3},
                                {name: "Caring", level: 3}
                            ]
                        },
                        {
                            name: "Peaceful",
                            level: 2,
                            subemotions: [
                                {name: "Satisfied", level: 3},
                                {name: "Relieved", level: 3}
                            ]
                        }
                    ]
                },
                {
                    name: "Fear",
                    img: 'assets/emotions/fear.png',
                    level: 1,
                    subemotions: [
                        {
                            name: "Scared",
                            level: 2,
                            subemotions: [
                                {name: "Frightened", level: 3},
                                {name: "Helpless", level: 3}
                            ]
                        },
                        {
                            name: "Terror",
                            level: 2,
                            subemotions: [
                                {name: "Hysterical", level: 3},
                                {name: "Panic", level: 3}
                            ]
                        },
                        {
                            name: "Insecure",
                            level: 2,
                            subemotions: [
                                {name: "Inferior", level: 3},
                                {name: "Inadequate", level: 3}
                            ]
                        },
                        {
                            name: "Nervous",
                            level: 2,
                            subemotions: [
                                {name: "Anxious", level: 3},
                                {name: "Worried", level: 3}
                            ]
                        },
                        {
                            name: "Horror",
                            level: 2,
                            subemotions: [
                                {name: "Dread", level: 3},
                                {name: "Mortified", level: 3}
                            ]
                        }
                    ]
                }
            ]
        };

app.config(function(){
  localforage.config({ name:'emotion-wheel', storeName:'entries' });
})

app.controller('ThemeToggle', function($scope, $rootScope, $document, $timeout) {
	var root = $document[0].documentElement; //html
	var body = $document[0].body;
	
	$rootScope.theme = root.getAttribute('data-bs-theme') || 'light';
	
	$scope.toggleTheme = function () {
		root.classList.add('theme-transition');
		body.classList.add('theme-transition');
		
		$rootScope.theme = ($rootScope.theme === 'dark') ? 'light' : 'dark';
		root.setAttribute('data-bs-theme', $rootScope.theme);
		
		$timeout(function() {
			root.classList.remove('theme-transition');
			body.classList.remove('theme-transition');
		}, 2000);
	};
});


app.controller('MainCtrl', function($scope, $rootScope, $timeout){
	$scope.primary = emotionData;
	$scope.entry = {comment: ''};
	//(subsubemo.name, subemo.name, emo.name, comment)
	$scope.pick = function(subsubemo, subemo, emo, comment){

		var entry = { emotion:subsubemo, parent:subemo, grandparent:emo, comment:$scope.entry.comment || 'No Comment', at:new Date().toISOString() };
		localforage.getItem('emotion-wheel').then(function(list){
			list = list || [];
			list.push(entry);
			return localforage.setItem('emotion-wheel', list);
		}).then(function(){
			//console.log('Saved', entry);
			comment = "";
		}).then(function() {
			$timeout(function(){
				$scope.entry.comment = '';
				const el = document.getElementById('savedToast');
				if (el) new bootstrap.Toast(el, {delay: 2000}).show();
				$rootScope.$broadcast('emotion-wheel:updated');
			});
		});
	};
});

app.controller('Statistics', ['$scope', '$timeout', function ($scope, $timeout) {
  $scope.primary = emotionData;
  $scope.selected_grandparent = "";

  // ----- Range: last 24h (Date objects) -----
  $scope.range = { from: null, to: null };
  (function initRange(){
    const now = new Date();
    $scope.range.to = now;
    $scope.range.from = new Date(now.getTime() - 24*3600*1000);
  })();
  $scope.resetLast24h = function(){
    const now = new Date();
    $scope.range.to = now;
    $scope.range.from = new Date(now.getTime() - 24*3600*1000);
  };

  // ----- Build hourly line for selected emotion within range -----
  $scope.pick_line = function(emo){
    $scope.currentEmotion = emo;

    const from = ($scope.range.from instanceof Date) ? $scope.range.from : null;
    const to   = ($scope.range.to   instanceof Date) ? $scope.range.to   : null;

    const rows = ($scope.data || []).filter(it => {
      if (!it || it.emotion !== emo) return false;
      const t = new Date(it.at);
      if (from && t < from) return false;
      if (to   && t > to)   return false;
      return true;
    });

    const counts = {};
    const pad = n => String(n).padStart(2,'0');
    rows.forEach(it => {
      const d = new Date(it.at);
      const key = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}`;
      counts[key] = (counts[key] || 0) + 1;
    });

    // Build dense hourly axis
    let start = from, end = to;
    if (!start || !end) {
      const times = rows.map(r => +new Date(r.at)).sort((a,b)=>a-b);
      if (times.length) {
        start = start || new Date(times[0]);
        end   = end   || new Date(times[times.length-1]);
      } else {
        start = start || new Date();
        end   = end   || new Date(start.getTime() + 3600*1000);
      }
    }
    start = new Date(start); start.setMinutes(0,0,0);
    end   = new Date(end);   end.setMinutes(0,0,0);

    const labels = [];
    const data = [];
    for (let t = new Date(start); t <= end; t = new Date(t.getTime() + 3600*1000)) {
      const key = `${t.getFullYear()}-${pad(t.getMonth()+1)}-${pad(t.getDate())} ${pad(t.getHours())}`;
      labels.push(key.replace(' ', ' • '));
      data.push(counts[key] || 0);
    }

    $scope.$applyAsync(function(){
      $scope.emotionSeries = ['Entries/hour'];
      $scope.emotionLabels = labels;
      $scope.emotionLine   = [data]; // array-of-arrays
    });
  }; // <-- IMPORTANT: close pick_line here

  // ----- Load stats from storage -----
  $scope.refreshStats = function() {
    localforage.getItem('emotion-wheel').then(function(list) {
      const data = list || [];

      // Weekday counts
      const weekdayCounts = [0,0,0,0,0,0,0];
      data.forEach(item => { const d = new Date(item.at); weekdayCounts[d.getDay()] += 1; });

      // Per-emotion totals
      const emotions = {};
      data.forEach(item => { emotions[item.emotion] = (emotions[item.emotion] || 0) + 1; });

      $scope.$applyAsync(function(){
        $scope.data = data;

        // Weekday chart
        $scope.weekdayLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        $scope.weekdaySeries = ['Entries'];
        $scope.weekdayData   = [weekdayCounts];

        // Bar/pie by emotion
        $scope.chartSeries = Object.keys(emotions);
        $scope.chartLabels = $scope.chartSeries.slice();
        $scope.chartData   = $scope.chartSeries.map(e => emotions[e]);

        // If an emotion is selected, rebuild the hourly line
        if ($scope.currentEmotion) {
          $scope.pick_line($scope.currentEmotion);
        }
      });
    });
  };

  // Initial load
  $scope.refreshStats();

  // Recompute on data updates
  var off = $scope.$on('emotion-wheel:updated', function(){
    $scope.refreshStats();
  });
  $scope.$on('$destroy', off);

  // Recompute hourly line if user adjusts range
  $scope.$watchGroup(['range.from','range.to'], function(){
    if ($scope.currentEmotion) $scope.pick_line($scope.currentEmotion);
  });

}]);


app.controller('EntriesTable', function($scope, $timeout, $rootScope, DTOptionsBuilder, DTColumnDefBuilder){

  $scope.rows = [];
  
  $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withOption('order', [[0, 'desc']])
    .withOption('pageLength', 25)
    .withOption('responsive', true)
    .withDOM('Bfrtip')
    .withButtons(['copy', 'pdf', 'print']);

  $scope.dtColumnDefs = [
    DTColumnDefBuilder.newColumnDef(0).withTitle('<i class="bi bi-calendar-day"></i> Date'),
    DTColumnDefBuilder.newColumnDef(1).withTitle('<i class="bi bi-emoji-smile"></i> Emotion'),
    DTColumnDefBuilder.newColumnDef(2).withTitle('<i class="bi bi-chat-right-text"></i> Cmt')
  ];

  $scope.refreshTable = function(){
    localforage.getItem('emotion-wheel').then(function(list){
      var data = (list || []).map(function(it){
        return {
          at: it.at,
          emotion: it.emotion,
          comment: it.comment || 'None'
        };
      });
	  $scope.$applyAsync(function(){
        $scope.rows = data;
      });
    });
  };

  $scope.openDeleteRow = function(row){
    $scope.pendingDelete = row;
    $timeout(function(){
      const el = document.getElementById('deleteRowModal');
      if (el) bootstrap.Modal.getOrCreateInstance(el).show();
    }, 0);
  };

  $scope.confirmDeleteRow = function(){
    if (!$scope.pendingDelete) return;
    const at = $scope.pendingDelete.at;
    localforage.getItem('emotion-wheel')
      .then(list => (list || []).filter(it => it.at !== at))
      .then(next => localforage.setItem('emotion-wheel', next))
      .then(function(){
        $scope.$applyAsync(function(){
          $scope.rows = $scope.rows.filter(r => r.at !== at);
          $scope.pendingDelete = null;
        });
        $timeout(function(){ $rootScope.$broadcast('emotion-wheel:updated'); }, 0);
      });
  };

  $scope.refreshTable();
  var off = $scope.$on('emotion-wheel:updated', function(){ $scope.refreshTable(); });
  $scope.$on('$destroy', off);
});

app.controller('DataConfig', function($scope, $timeout, $rootScope) {
  $scope.decision = { deleteData: null };
  // Export to JSON file
  $scope.exportData = function() {
    localforage.getItem('emotion-wheel').then(function(list){
      const data = list || [];
      const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'emotion-wheel.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  // Import from JSON file
  $scope.importData = function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) {
          alert("Invalid file format: expected an array");
          return;
        }
        localforage.setItem('emotion-wheel', imported).then(function(){
          $timeout(function(){
			$rootScope.$broadcast('emotion-wheel:updated');
            alert("Data imported successfully! Imported (" + imported.length + " entries)");
          });
        });
      } catch(err) {
        alert("Invalid JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  };
  $scope.openDeleteAll = function(){
	  const el = document.getElementById('deleteModal');
	  if (el) bootstrap.Modal.getOrCreateInstance(el).show();
	};
	
	$scope.doDeleteAll = function(){
	  localforage.removeItem('emotion-wheel').then(function(){
		$timeout(function(){
		  const el = document.getElementById('deleteModal');
		  if (el) bootstrap.Modal.getOrCreateInstance(el).hide();
		  $rootScope.$broadcast('emotion-wheel:updated');
		});
	  });
	};

});
