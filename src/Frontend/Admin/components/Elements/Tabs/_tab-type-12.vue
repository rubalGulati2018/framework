<template>
    <div class="m-portlet m-portlet--tabs">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        {{title}}
                    </h3>
                </div>
            </div>
            <div class="m-portlet__head-tools">
                <ul class="nav nav-tabs m-tabs-line m-tabs-line--right" role="tablist">
                    <li class="nav-item m-tabs__item">
                        <a class="nav-link m-tabs__link active" data-toggle="tab" href="#m_portlet_base_demo_1_tab_content" role="tab">
                            <i class="flaticon-multimedia"></i>
                            Messages
                        </a>
                    </li>
                    <li class="nav-item m-tabs__item">
                        <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_portlet_base_demo_1_tab_content" role="tab">
                            <i class="flaticon-cogwheel-2"></i>
                            Settings
                        </a>
                    </li>
                    <li class="nav-item m-tabs__item">
                        <a class="nav-link m-tabs__link" data-toggle="tab" href="#m_portlet_base_demo_1_tab_content" role="tab">
                            <i class="flaticon-lifebuoy"></i>
                            Logs
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="m-portlet__body">
            <div class="tab-content">
                <div class="tab-pane active" id="m_tabs_6_1" role="tabpanel">
                    {{description}}
                </div>
                <div class="tab-pane" id="m_tabs_6_2" role="tabpanel">
                    {{description}}
                </div>
                <div class="tab-pane" id="m_tabs_6_3" role="tabpanel">
                    {{description}}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "tab-type-12",
        props: ['title','description']
    }
</script>

<style scoped>

</style>