<template>
    <header class="app-header full app-container">
        <div className="header-container">
            <div class="logo-container">
                <span>
                    <RouterLink to="/">Mr.Bitcoin</RouterLink>
                </span>
            </div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/statistics">Statistics</RouterLink>
            </nav>
            <div class="user-info">
                <span>Login</span>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped></style>