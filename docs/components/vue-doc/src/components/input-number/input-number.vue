<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>InputNumber 数字输入框</h1>
            <p>通过鼠标或键盘，输入范围内的数值。</p>
        </div>
        <!-- 标题头部结束 -->

        <!--基本使用部分-->
        <div class="detail-box">
            <h2>基础数字输入框</h2>
            <p class="code-left-line">Demo</p>
            <sl-input-number :min="1" :max="10" v-model="value" @change="onChange" />
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基本使用部分结束-->

        <!--加减符号输入框-->
        <div class="detail-box">
            <h2>加减符号输入框</h2>
            <p class="code-left-line">Demo</p>
            <sl-input-number :min="1" :max="10" v-model="value" @change="onChange" handleType="symbols" />
            <search-code :code="CodeSymbols"></search-code>
        </div>
        <!--加减符号输入框结束-->

        <!--三种大小-->
        <div class="detail-box">
            <h2>三种大小</h2>
            <p class="code-left-line">Demo</p>
            <sl-input-number size="large" :min="1" :max="10" :defaultValue="3" @change="onChange" />
            <sl-input-number :min="1" :max="10" :defaultValue="3" @change="onChange" />
            <sl-input-number size="small" :min="1" :max="10" :defaultValue="3" @change="onChange" />
            <search-code :code="CodeSize"></search-code>
        </div>
        <!--三种大小结束-->

        <!--小数-->
        <div class="detail-box">
            <h2>小数</h2>
            <p class="code-left-line">Demo</p>
            <sl-input-number :min="0" :max="10" :step="0.1" :defaultValue="3" />
            <search-code :code="CodeDigital"></search-code>
        </div>
        <!--小数结束-->

        <!--格式化展示-->
        <div class="detail-box">
            <h2>格式化展示</h2>
            <p class="code-left-line">Demo</p>
            <sl-input-number
                :defaultValue="3"
                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                @change="onChange"
            />
            <sl-input-number
                :defaultValue="3"
                :min="0"
                :max="100"
                :formatter="value => `${value}%`"
                :parser="value => value.replace('%', '')"
                @change="onChange"
            />
            <search-code :code="CodeFormat"></search-code>
        </div>
        <!--格式化展示结束-->

        <!--禁用-->
        <div class="detail-box">
            <h2>禁用</h2>
            <p class="code-left-line">Demo</p>
            <sl-input-number :min="1" :max="10" :disabled="true" :defaultValue="3" />
            <search-code :code="CodeDisable"></search-code>
        </div>
        <!--禁用结束-->

        <!--api展示-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-input-number</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">参数</th>
                    <th width="35%">描述</th>
                    <th width="35%">类型</th>
                    <th width="15%">默认值</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>autoFocus</td>
                    <td>自动获取焦点</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>defaultValue</td>
                    <td>初始值</td>
                    <td>number </td>
                    <td></td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>formatter</td>
                    <td>指定输入框展示值的格式</td>
                    <td>function(value: number | string): string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>最大值</td>
                    <td>number</td>
                    <td>Infinity</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>最小值</td>
                    <td>number</td>
                    <td>-Infinity</td>
                </tr>
                <tr>
                    <td>parser</td>
                    <td>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</td>
                    <td>function( string): number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>precision</td>
                    <td>数值精度</td>
                    <td>number</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>decimalSeparator</td>
                    <td>小数点</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>输入框大小</td>
                    <td>string</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>每次改变步数，可以为小数</td>
                    <td>number|string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>value(v-model)</td>
                    <td>当前值</td>
                    <td>number</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <p class="row-in-round">sl-input-number 事件</p>
            <div class="detail-block">
                <table class="salus-table salus-table-hover salus-table-striped">
                    <thead>
                    <tr>
                        <th width="15%">事件名称</th>
                        <th width="70%">说明</th>
                        <th width="15%">回调参数</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>change</td>
                        <td>变化回调</td>
                        <td>Function(value: number | string)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--api展示结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeSymbols, CodeSize, CodeDigital, CodeFormat, CodeDisable } from "./input-number.code";

    export default {
        name: 'InputNumber',
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        data() {
            return {
                CodeBasic,
                CodeSymbols,
                CodeSize,
                CodeDigital,
                CodeFormat,
                CodeDisable,
                value: 3,
            }
        },
        methods: {
            onChange(value) {
                console.log('changed', value);
            },
        }
    }
</script>