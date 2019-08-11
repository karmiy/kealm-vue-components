export const CodeBasic =
    `    <template>
        <div>
            <sl-affix :offset-top="10">
                <sl-button type="primary"><span>Affix top</span></sl-button>
            </sl-affix>
            <sl-affix :offset-bottom="0">
                <sl-button type="primary"><span>Affix bottom</span></sl-button>
            </sl-affix>
        </div>
    </template>`;

/* 固定状态改变的回调 */
export const CodeChange =
    `    <template>
        <div>
            <sl-affix :offset-top="120" @change="onAffixStatusChange">
                <sl-button><span>120px to affix top</span></sl-button>
            </sl-affix>
        </div>
    </template>
    <script>
        export default {
            methods: {
                onAffixStatusChange(status) {
                    console.log(status);
                }
            }
        }
    </script>`;


/* 滚动容器 */
export const CodeTarget =
    `    <template>
        <div class="scrollable-container" ref="target">
            <div class="background">
                <sl-affix :target="() => {return this.$refs.page}">
                    <sl-button type="primary">
                        <span>Fixed at the top of container</span>
                    </sl-button>
                </sl-affix>
            </div>
        </div>
    </template>
    <style>
        .scrollable-container {
            height: 100px;
            width: 300px;
            overflow-y: scroll;
        }

        .background {
            padding-top: 60px;
            height: 300px;
            background-image: url(https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);
        }
    </style>`;


/* 注意 */
export const CodeNote =
    `    <sl-affix :style="{ position: 'absolute', top: y, left: x}">
      ...
    </sl-affix>`;
