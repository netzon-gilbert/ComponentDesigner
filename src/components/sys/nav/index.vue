<template>
    <div class="nav-wrapper">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <!-- navbar items, navbar burger... -->
            </div>
            <div class="navbar-menu">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        atoms
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            input text
                        </a>
                        <a class="navbar-item">
                            input password
                        </a>
                         <a class="navbar-item" @click="goTo('button')">
                            button
                        </a>
                        <a class="navbar-item">
                            checkbox
                        </a>
                        <a class="navbar-item">
                            radio
                        </a>
                        <a class="navbar-item">
                            textarea
                        </a>
                        <a class="navbar-item">
                            color
                        </a>
                        <a class="navbar-item">
                            slider
                        </a>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        blocks
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Overview
                        </a>
                    </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        containers
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Overview
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script src="./script/nav.js">
</script>
<style lang="scss">
@import './style/nav.scss'
</style>