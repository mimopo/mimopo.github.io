$(document).ready(function() {
    var selector = '.github-widget';
    var username = $(selector).data('username');
    GitHubActivity.feed({
        username: username,
        selector: selector,
        templates: {
            Stream: '<div class="gha-feed">{{{text}}}<div class="gha-push-small"></div>{{{footer}}}</div>',
            Activity: '<div id="{{id}}" class="gha-activity">\
                       <div class="gha-activity-icon"><span class="octicon octicon-{{icon}}"></span></div>\
                       <div class="gha-message">{{{userLink}}} {{{message}}}<div class="gha-time">{{{timeString}}}</div></div>\
                       <div class="gha-clear"></div>\
                     </div>',
            SingleLineActivity: '<div class="gha-activity gha-small">\
                                 <div class="gha-activity-icon"><span class="octicon octicon-{{icon}}"></span></div>\
                                 <div class="gha-message">\
                                    {{{userLink}}} {{{message}}}\
                                    <div class="gha-time">{{{timeString}}}</div>\
                                </div>\
                                 <div class="gha-clear"></div>\
                               </div>',
            UserHeader: ' ',
            Footer: '',
            NoActivity: '<div class="gha-info alert alert-info">This user does not have any public activity yet.</div>',
            NotFound: '<div class="gha-info alert alert-warning">GitHub API limit reached.</div>',
            CommitCommentEvent: 'commented on commit {{{commentLink}}}<br><small>{{{userGravatar}}}{{comment}}</small>',
            CreateEvent: 'created {{payload.ref_type}} {{{branchLink}}}{{{repoLink}}}',
            DeleteEvent: 'deleted {{payload.ref_type}} {{payload.ref}} at {{{repoLink}}}',
            FollowEvent: 'started following {{{targetLink}}}',
            ForkEvent: 'forked {{{repoLink}}} to {{{forkLink}}}',
            GistEvent: '{{actionType}} {{{gistLink}}}',
            GollumEvent: '{{actionType}} the {{{repoLink}}} wiki<br><small>{{{userGravatar}}}{{{message}}}</small>',
            IssueCommentEvent: 'commented on {{issueType}} {{{issueLink}}}<br><small>{{{userGravatar}}}{{comment}}</small>',
            IssuesEvent: '{{payload.action}} issue {{{issueLink}}}<br><small>{{{userGravatar}}}{{payload.issue.title}}</small>',
            MemberEvent: 'added {{{memberLink}}} to {{{repoLink}}}',
            PublicEvent: 'open sourced {{{repoLink}}}',
            PullRequestEvent: '{{payload.action}} pull request {{{pullRequestLink}}}<br><small>{{{userGravatar}}}{{payload.pull_request.title}}</small>{{{mergeMessage}}}',
            PullRequestReviewCommentEvent: 'commented on pull request {{{pullRequestLink}}}<br><small>{{{userGravatar}}}{{comment}}</small>',
            PushEvent: 'pushed to {{{branchLink}}}{{{repoLink}}}<br>\
                        <ul class="gha-commits">{{#payload.commits}}<li><small>{{{committerGravatar}}} {{{shaLink}}} {{message}}</small></li>{{/payload.commits}}</ul>\
                        <small class="gha-message-commits">{{{commitsMessage}}}</small>',
            ReleaseEvent: 'released {{{tagLink}}} at {{{repoLink}}}<br><small>{{{userGravatar}}}<span class="octicon octicon-cloud-download"></span>  {{{zipLink}}}</small>',
            WatchEvent: 'starred {{{repoLink}}}'
        }
    });
});