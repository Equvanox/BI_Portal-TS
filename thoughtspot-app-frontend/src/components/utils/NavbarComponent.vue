<template>
  <header class="header">
      <div class="hamburger-menu" @click="$emit('toggle_sidebar')">
          <i class="fas fa-bars"></i>
      </div>
      <div class="logo">
          <img src="@/assets/premion_logo.jpg" alt="Logo" />
      </div>

      <nav class="menu">
          <ul>
          <div style="margin-right: 13px;">
              <li @click="oneview()"><a href="#" title="Oneview"><i class="fas fa-search"></i><span>OneView</span></a></li>
          </div>
          <div style="margin-right: 13px;">
              <li @click="answers()"><a href="#" title="Answers"><i class="fa-solid fa-book"></i><span>Answers</span></a></li>
          </div>
          <div style="margin-right: 13px;">
              <li @click="liveboards()"><a href="#" title="Liveboards"><i class="fas fa-tachometer-alt"></i><span>LiveBoards</span></a></li>
          </div>
          <div style="margin-right: 13px;">
              <li @click="sage()"><a href="#" title="Sage"><i class="fa-solid fa-eye"></i><span>Sage(Alpha)</span></a></li>
          </div>
          <!-- Help Button -->
          <div style="margin-right: 5px; margin-left: auto;">
              <li><a href="#" title="Help"><i class="fas fa-question-circle"></i><span>Help</span></a></li>
          </div>
          </ul>
      </nav>
  </header>
</template>

<script>
import { nextTick } from 'vue';
import '@/styles/HomePageStyle.css';
import { init, SearchEmbed, Action, AuthType, AppEmbed, Page, SageEmbed } from "@thoughtspot/visual-embed-sdk";
export default {
    methods: {
        async oneview() {
            await nextTick();
            let searchEmbed = new SearchEmbed("#embed-container", {
                frameParams: {
                    width: '99%',
                    height: '99%',
                    padding: '10px' 
                },
                customizations: {
                    style: {
                        customCSS: {
                            rules_UNSTABLE: {
                                ".sage-data-source-preview-module__sageDataSourcePreviewContainer": {
                                    "pointer-events": "none"
                                },
                                ".sage-data-source-preview-module__sageDataSourcePreviewHeadIcon": {
                                     "display": "none"
                                }
                            }
                        },
                    },
                },
                dataPanelV2: true,
                disabledActions: [],
                hiddenActions:[Action.Pin,Action.ChooseDataSources,'test','requestVerification',Action.SpotIQAnalyze],
                dataSources: [
                    "d2b738b9-4a89-40c1-8cd3-6b1751469835",
                    "c8859442-2896-48e9-b01f-d82f2e695a48",
                    "78578502-0210-4f11-b60d-97e02c98bba5"
                ]
            });
            this.$emit('oneviewflag');
            searchEmbed.render();
        },
        answers() {
            let answerEmbed = new AppEmbed("#embed-container", {
                frameParams: {
                    width: '100%',
                    height: '100%',
                },
                hiddenActions: [Action.EditTML,Action.ExportTML,Action.UpdateTML,Action.SpotIQAnalyze,'test','requestVerification',Action.Save,Action.SaveAsView],
                pageId: Page.Answers
            });
            this.$emit('oneviewflag');
            answerEmbed.render();
        },
        liveboards() {
            let liveboardEmbed = new AppEmbed("#embed-container", {
                frameParams: {
                    width: '100%',
                    height: '100%',
                },
                hiddenActions: [Action.EditTML,Action.ExportTML,Action.UpdateTML,Action.SpotIQAnalyze,'test','requestVerification'],
                pageId: Page.Liveboards
            });
            this.$emit('oneviewflag');
            liveboardEmbed.render();
        },
        sage() {
            let sageEmbed = new SageEmbed("#embed-container", {
                frameParams: {
                    width: '100%',
                    height: '100%',
                },
                dataSource: "c8859442-2896-48e9-b01f-d82f2e695a48",
                visibleActions: [Action.DownloadAsPdf, Action.DrillDown, Action.AddToFavorites, Action.Save,Action.Edit,Action.RequestAccess,Action.SaveAsView],
                hideWorksheetSelector:true,
            });
            this.$emit('oneviewflag');
            sageEmbed.render();
        }
    },
    async mounted() {
        document.addEventListener('click', this.handleClick);
        try {
            init({
                thoughtSpotHost: 'https://tegna.thoughtspot.cloud/', 
                authType: AuthType.None,
                getAuthToken: async () => {
                    return localStorage.getItem('token');
                },
            });
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    },
    beforeUnmount() {
        document.removeEventListener('click', this.handleClick);
    }
};
</script>