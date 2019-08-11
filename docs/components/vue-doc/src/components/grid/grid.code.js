/* 基础栅格 */
export const CodeBasic =
    `    <template>
        <div>
            <sl-row>
                <sl-col :span="12" class="salue-panel">col-12</sl-col>
                <sl-col :span="12" class="salue-panel demo-col-3">col-12</sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="8" class="salue-panel">col-8</sl-col>
                <sl-col :span="8" class="salue-panel demo-col-3">col-8</sl-col>
                <sl-col :span="8" class="salue-panel">col-8</sl-col>
            </sl-row>
            <sl-row>
                <sl-col :span="6" class="salue-panel">col-6</sl-col>
                <sl-col :span="6" class="salue-panel demo-col-3">col-6</sl-col>
                <sl-col :span="6" class="salue-panel">col-6</sl-col>
                <sl-col :span="6" class="salue-panel demo-col-3">col-6</sl-col>
            </sl-row>
        </div>
    </template>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
        .demo-col-3 {
            background:rgba(55,188,112,0.6);
        }
    </style>`;

/* 区块间隔 */
export const CodeGutter =
    `    <template>
        <div>
            <sl-row :gutter="16">
                <sl-col :span="6"><div class="salue-panel">col-6</div></sl-col>
                <sl-col :span="6"><div class="salue-panel demo-col-3">col-6</div></sl-col>
                <sl-col :span="6"><div class="salue-panel">col-6</div></sl-col>
                <sl-col :span="6"><div class="salue-panel demo-col-3">col-6</div></sl-col>
            </sl-row>
            <sl-row :gutter="{ xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 8 }">
                <sl-col :span="6"><div class="salue-panel">col-6</div></sl-col>
                <sl-col :span="6"><div class="salue-panel demo-col-3">col-6</div></sl-col>
                <sl-col :span="6"><div class="salue-panel">col-6</div></sl-col>
                <sl-col :span="6"><div class="salue-panel demo-col-3">col-6</div></sl-col>
            </sl-row>
        </div>
    </template>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
        .demo-col-3 {
            background:rgba(55,188,112,0.6);
        }
    </style>`;

/* 左右偏移 */
export const CodeOffset =
    `    <template>
        <div>
            <sl-row>
                <sl-col :span="8">
                    <div class="salue-panel">col8</div>
                </sl-col>
                <sl-col :span="8" :offset="8">
                    <div class="salue-panel demo-col-3">col8</div>
                </sl-col>
            </sl-row>
        </div>
    </template>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
        .demo-col-3 {
            background:rgba(55,188,112,0.6);
        }
    </style>`;

/* Flex布局 */
export const CodeFlex =
    `    <template>
        <div>
            <p class="detail-box-p">sub-element align left</p>
                <sl-row type="flex" justify="start">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p  class="detail-box-p">sub-element align center</p>
                <sl-row type="flex" justify="center">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p  class="detail-box-p">sub-element align right</p>
                <sl-row type="flex" justify="end">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p  class="detail-box-p" >sub-element monospaced arrangement</p>
                <sl-row type="flex" justify="space-between">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
                <p  class="detail-box-p">sub-element align full</p>
                <sl-row type="flex" justify="space-around">
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel">col-4</sl-col>
                    <sl-col :span="4" class="salue-panel demo-col-3">col-4</sl-col>
                </sl-row>
            </div>
        </div>
    </template>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
        .demo-col-3 {
            background:rgba(55,188,112,0.6);
        }
    </style>`;

/* Flex对齐 */
export const CodeFlexAlign =
    `    <template>
        <div>
            <p  class="detail-box-p"> Align Top</p>
            <sl-row type="flex" justify="center" align="top">
                <sl-col :span="4"><p style="height:100px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:50px;" class="salue-panel demo-col-3">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:120px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:80px;" class="salue-panel demo-col-3">col-4</p></sl-col>
            </sl-row>
            <p  class="detail-box-p">Align Center</p>
            <sl-row type="flex" justify="space-around" align="middle">
                <sl-col :span="4"><p style="height:100px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:50px;" class="salue-panel demo-col-3">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:120px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:80px;" class="salue-panel demo-col-3">col-4</p></sl-col>
            </sl-row>
            <p  class="detail-box-p">Align Bottom</p>
            <sl-row type="flex" justify="space-between" align="bottom">
                <sl-col :span="4"><p style="height:100px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:50px;" class="salue-panel demo-col-3">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:120px;" class="salue-panel">col-4</p></sl-col>
                <sl-col :span="4"><p style="height:80px;" class="salue-panel demo-col-3">col-4</p></sl-col>
            </sl-row>
        </div>
    </template>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
        .demo-col-3 {
            background:rgba(55,188,112,0.6);
        }
    </style>`;

/* Flex排序 */
export const CodeFlexOrder =
    `    <template>
        <div>
            <sl-row type="flex">
                <sl-col :span="6" :order="order" v-for="(order,index) in orderList" class="salue-panel" :key="index">
                    {{ index + 1 }} col-order-{{ order }}
                </sl-col>
            </sl-row>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    orderList: [ 4, 3, 2, 1 ]
                }
            }
        }
    </script>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
    </style>`;

/* 响应式布局 */
export const CodeResponsive =
    `    <template>
        <div>
            <sl-row>
                <sl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="salue-panel">Col</sl-col>
                <sl-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" class="salue-panel demo-col-3">Col</sl-col>
                <sl-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10" class="salue-panel">Col</sl-col>
            </sl-row>
        </div>
    </template>
    <style>
        .salue-panel{
            background: #37bc70;
            text-align: center;
            padding: 10px 0;
            color: #fff;
            font-size: 14px;
            border: none;
            margin-top: 0;
        }
        .demo-col-3 {
            background:rgba(55,188,112,0.6);
        }
    </style>`;
