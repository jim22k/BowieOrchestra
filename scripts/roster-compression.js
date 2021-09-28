function collapseRoster(orchestra) {
    var roster = document.getElementById('roster-'+orchestra);
    var roster_button = document.getElementById('roster-button-'+orchestra);
    if (roster.className === 'roster'){
        roster.className += ' roster-show';
        roster_button.innerHTML = ' Hide Roster <span style="font-size:medium"><i class="fas fa-chevron-up"></i></span>';
    } else {
        roster.className = 'roster';
        roster_button.innerHTML = 'View Roster <span style="font-size:medium"><i class="fas fa-chevron-down"></i></span>'
    }
}