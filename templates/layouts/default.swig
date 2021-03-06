{% import "../mixins/flash-messages.swig" as FlashMessages %}

<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title>{{ title|default("Find a Driver in Cambodia") }}</title>
		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

		{# Customise the stylesheet for your site by editing /public/styles/site.sass #}
		<link href="/styles/site.css" rel="stylesheet">
        <link href="/styles/bootstrap/bootstrap-datetimepicker.min.css" rel="stylesheet">

		{# This file provides the default styling for the KeystoneJS Content Editor #}
		{%- if user and user.canAccessKeystone -%}
			<link href="/keystone/styles/content/editor.min.css" rel="stylesheet">
		{%- endif -%}

		{# HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries
		   Safely remove this block if you are not targeting IE8 #}
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->

		{# Include template-specific stylesheets by extending the css block #}
		{%- block css %}{% endblock -%}

		{# Add any other template-specific HEAD tags by extending the head block #}
		{%- block head %}{% endblock %}
	</head>
	<body>

		{# HEADER #}
		<div id="header" class="container">

			{# Customise your site"s navigation by changing the navLinks Array in ./routes/middleware.js
			   ... or completely change this header to suit your design. #}
			<div role="navigation" class="navbar">
				<div class="container-fluid">
					<div class="navbar-header">
						<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a id='logo' class="navbar-brand" href="/">Home</a>
					</div>
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-left">
							{%- for link in navLinks -%}
								{%- set linkClass = '' -%}
								{%- if link.key == section -%}
									{%- set linkClass = ' class="active"' -%}
								{%- endif %}
								<li{{ linkClass | safe }}>
									<a href="{{ link.href }}">{{ link.label }}</a>
								</li>
							{%- endfor %}
						</ul>
						<!-- ul class="nav navbar-nav navbar-right">
							{% if user -%}
								{%- if user.canAccessKeystone -%}
									<li><a href="/keystone">Open Admin Panel</a></li>
								{%- endif -%}
								<li><a href="/keystone/signout">Sign Out</a></li>
							{%- else -%}
								<li><a href="/keystone/signin">Sign In</a></li>
							{%- endif %}
						</ul -->
					</div>
				</div>
			</div>
		</div>

		{# BODY #}
		<div id="body">
			{# NOTE:
			   There is no .container wrapping class around body blocks to allow more flexibility in design.
			   Remember to include it in your templates when you override the intro and content blocks! #}

			{# The Intro block appears above flash messages (used for temporary information display) #}
			{%- block intro -%}{%- endblock -%}

			{# Flash messages allow you to display once-off status messages to users, e.g. form
			   validation errors, success messages, etc. #}
			{{ FlashMessages.renderMessages(messages) }}

			{# The content block should contain the body of your template"s content #}
			{%- block content -%}{%- endblock -%}
		</div>

		{# FOOTER #}
		<div id="footer" class="container">
			{# You don"t _have_ to include a link saying your site is powered by KeystoneJS, but we appreciate it! #}      <div class="row">
                <div class="col-md-4">
                    <p>Contact us via <a href="mailto:wlgq@hotmail.com" target="_blank">Email</a>.</p>
                </div>
                <div class="col-md-4">
                
                </div>
                <div class="col-md-4">
                    <a class="pull-right" href="#logo">Back To Top</a>
                </div>
            </div>
			
            
		</div>

		{# JAVASCRIPT #}

		{# jQuery 1.11.1 is included by default, and required by both Bootstrap
			and the KeystoneJS Content Editor. If you are not targeting IE8,
			you can upgrade to 2.1.1 (also bundled) for better performance. #}
		<script src="/js/lib/jquery/jquery-1.11.1.min.js"></script>

		{# Customise which Bootstrap javascript files are served by including
			them specifically here, instead of bootstrap-3.2.0.min.js #}
		<script src="/js/lib/bootstrap/bootstrap-3.2.0.min.js"></script>
        <script src="/js/lib/bootstrap/collapse.js"></script>
        <script src="/js/lib/bootstrap/transition.js"></script>
        <script src="/js/lib/moment.min.js"></script>
        <script src="/js/lib/bootstrap/bootstrap-datetimepicker.min.js"></script>

		{# The KeystoneJS Content Editor provides support for ks-editable data attributes,
			which generate links to edit content for users who can access Keystone #}
		{% if user and user.canAccessKeystone -%}
			<script src="/keystone/js/content/editor.js"></script>
		{%- endif -%}

		{# Add scripts that are globally required by your site here. #}
            <script src="/js/homepage.js"></script>
		{# Include template-specific javascript files by extending the js block #}
		{%- block js -%}{%- endblock -%}
	</body>
</html>
