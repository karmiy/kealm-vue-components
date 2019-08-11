<template>
    <div class="page-box">
        <div class="detail-box">
            <h1>Tag 标签</h1>
            <p>进行标记和分类的小标签。</p>
            <p>用于标记事物的属性和维度。</p>
            <p>进行分类。</p>
        </div>

        <!--基础开关-->
        <div class="detail-box">
            <h2>基础标签</h2>
            <p class="code-left-line">Demo</p>
            <p>可以通过添加 closable 变为可关闭标签，通过添加closeIcon设置关闭Icon。</p>
            <div class="detail-block">
                <sl-tag>Tag 1</sl-tag>
                <sl-tag><a href="javascript:;">Link</a></sl-tag>
                <sl-tag closable @close="log">Tag 2</sl-tag>
                <sl-tag closable @close="preventDefault">Prevent Default</sl-tag>
            </div>
            <div class="detail-block">
                <sl-tag>Tag 1</sl-tag>
                <sl-tag><a href="javascript:;">Link</a></sl-tag>
                <sl-tag closable @close="log">Tag 2<i slot="closeIcon" class='salus-icon-round-minus' /></sl-tag>
                <sl-tag closable @close="preventDefault">Prevent Default<i slot="closeIcon" class='salus-icon-round-minus' /></sl-tag>
            </div>
            <search-code :code="CodeBasic"></search-code>
        </div>
        <!--基础开关结束-->

        <!--彩色标签-->
        <div class="detail-box">
            <h2>彩色标签</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-tag color="#108ee9">#108ee9</sl-tag>
                <sl-tag color="#2db7f5">#2db7f5</sl-tag>
                <sl-tag color="#87d068">#87d068</sl-tag>
                <sl-tag color="#f1f1f1" fontColor="#71aad8">color: #f1f1f1, font: #71aad8</sl-tag>
                <sl-tag color="#f4f4f4" fontColor="#1394ff">color: #f4f4f4, font: #1394ff</sl-tag>
            </div>
            <search-code :code="CodeColor"></search-code>
        </div>
        <!--彩色标签结束-->

        <!--动态添加标签-->
        <div class="detail-box">
            <h2>动态添加标签</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <template v-for="(tag, index) in tags">
                    <sl-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                        <sl-tag :key="tag" :closable="index !== 0" :afterClose="() => handleClose(tag)">
                            {{`${tag.slice(0, 20)}...`}}
                        </sl-tag>
                    </sl-tooltip>
                    <sl-tag v-else :key="tag" :closable="index !== 0" :afterClose="() => handleClose(tag)">{{tag}}</sl-tag>
                </template>
                <sl-input v-if="inputVisible"
                          ref="input"
                          type="text"
                          size="small"
                          :style="{ width: '78px' }"
                          v-model="inputValue"
                          @blur="handleInputConfirm"
                          @keyup.enter="handleInputConfirm" />
                <sl-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;" ><i class="salus-icon-plus-o" /> New Tag</sl-tag>
            </div>
            <search-code :code="CodeAddDynami"></search-code>
        </div>
        <!--动态添加标签结束-->

        <!--可选择标签-->
        <div class="detail-box">
            <h2>可选择标签</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-tag-group v-model="groups">
                    <sl-checkable-tag key="1" slot="checkableTag">Tag1</sl-checkable-tag>
                    <sl-checkable-tag key="2" slot="checkableTag">Tag2</sl-checkable-tag>
                </sl-tag-group>
            </div>
            <search-code :code="CodeChosen"></search-code>
        </div>
        <!--可选择标签结束-->

        <!--可单选标签-->
        <div class="detail-box">
            <h2>可单选标签</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <sl-tag-group v-model="group" mode="radio">
                    <sl-checkable-tag key="1" slot="checkableTag">Tag1</sl-checkable-tag>
                    <sl-checkable-tag key="2" slot="checkableTag">Tag2</sl-checkable-tag>
                </sl-tag-group>
            </div>
            <search-code :code="CodeSingleChosen"></search-code>
        </div>
        <!--可单选标签结束-->

        <!--热门标签-->
        <div class="detail-box">
            <h2>热门标签</h2>
            <p class="code-left-line">Demo</p>
            <div class="detail-block">
                <strong :style="{ marginRight: 8 }">Categories:</strong>
                <template v-for="tag in tags">
                    <sl-checkable-tag
                        :key="tag"
                        :checked="selectedTags.indexOf(tag) > -1"
                        @change="(checked) => handleChange(tag, checked)"
                    >
                        {{tag}}
                    </sl-checkable-tag>
                </template>
            </div>
            <search-code :code="CodeHot"></search-code>
        </div>
        <!--热门标签结束-->

        <!--参数说明开始-->
        <div class="detail-box">
            <h2>API</h2>
            <p class="row-in-round">sl-tag</p>
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
                    <td>afterClose</td>
                    <td>关闭动画完成后的回调</td>
                    <td>() => void</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>closable</td>
                    <td>标签是否可以关闭</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>标签色</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>fontColor</td>
                    <td>字体色</td>
                    <td>string</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>visible(v-model)</td>
                    <td>是否显示标签</td>
                    <td>boolean</td>
                    <td>true</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-tag 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
                <thead>
                <tr>
                    <th width="15%">事件名称</th>
                    <th width="70%">说明</th>
                    <th width="15%">回调参数</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>close</td>
                    <td>关闭时的回调</td>
                    <td>(e) => void</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-checkable-tag</p>
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
                    <td>checked</td>
                    <td>设置标签的选中状态</td>
                    <td>boolean</td>
                    <td>false</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-checkable-tag 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
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
                    <td>点击标签时触发的回调</td>
                    <td>(checked) => void</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-tag-group</p>
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
                    <td>mode</td>
                    <td>标签工作模式</td>
                    <td>'checkbox' | 'radio'</td>
                    <td>'checkbox'</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>当前sl-checkable-tag选中项，如果mode是checkbox，则为数组，否则为字符串，取值对应sl-checkable-tag的key</td>
                    <td>string | string[]</td>
                    <td>-</td>
                </tr>
                </tbody>
            </table>

            <p class="row-in-round">sl-tag-group 事件</p>
            <table class="salus-table salus-table-striped salus-table-hover">
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
                    <td>点击标签时触发的回调</td>
                    <td>(checked) => void</td>
                </tr>
                </tbody>
            </table>

        </div>
        <!--参数说明结束-->
    </div>
</template>
<script>
    import { CodeBasic, CodeColor, CodeAddDynami, CodeHot, CodeChosen, CodeSingleChosen } from "./tag.code.js";

    export default {
        data() {
            return {
              CodeBasic,
              CodeColor,
              CodeAddDynami,
              CodeHot,
              CodeChosen,
              CodeSingleChosen,
              tags: ['Unremovable', 'Tag 2', 'Tag 3'],
              inputVisible: false,
              inputValue: '',
              groups: ['1'],
              group: '1',
              tags: ['Movies', 'Books', 'Music', 'Sports'],
              selectedTags: [],
            }
        },
        components: {
            SearchCode: () => import('../../common/searchCode/searchCode')
        },
        methods: {
          log (e) {
            console.log(e)
          },
          preventDefault (e) {
            e.preventDefault()
            console.log('Clicked! But prevent default.')
          },
          handleClose (removedTag) {
            const tags = this.tags.filter(tag => tag !== removedTag);
            this.tags = tags
          },
          handleInputConfirm() {
            const inputValue = this.inputValue;
            let tags = this.tags;
            if (inputValue && tags.indexOf(inputValue) === -1) {
              tags = [...tags, inputValue]
            }
            Object.assign(this, {
              tags,
              inputVisible: false,
              inputValue: '',
            })
          },
          showInput() {
            this.inputVisible = true
            this.$nextTick(function () {
              this.$refs.input.focus()
            })
          },
          handleChange (tag, checked) {
            const { selectedTags } = this;
            const nextSelectedTags = checked
              ? [...selectedTags, tag]
              : selectedTags.filter(t => t !== tag);
            console.log('You are interested in: ', nextSelectedTags)
            this.selectedTags = nextSelectedTags
          },
        },
    }
</script>