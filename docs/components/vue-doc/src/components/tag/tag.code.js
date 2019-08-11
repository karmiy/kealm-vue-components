export const CodeBasic =
`    <template>
        <div>
            <sl-tag>Tag 1</sl-tag>
            <sl-tag><a href="javascript:;">Link</a></sl-tag>
            <sl-tag closable @close="log">Tag 2</sl-tag>
            <sl-tag closable @close="preventDefault">Prevent Default</sl-tag>
            <sl-tag closable @close="log">Tag 2<i slot="closeIcon" class='salus-icon-round-minus' /></sl-tag>
            <sl-tag closable @close="preventDefault">Prevent Default<i slot="closeIcon" class='salus-icon-round-minus' /></sl-tag>
        </div>
    </template>
    <script>
        export default {
            methods: {
                log (e) {
                  console.log(e)
                },
                preventDefault (e) {
                  e.preventDefault()
                  console.log('Clicked! But prevent default.')
                },
            }
        }
    </script>`

/* 彩色标签 */
export const CodeColor =
`    <template>
        <div>
            <sl-tag color="#108ee9">#108ee9</sl-tag>
            <sl-tag color="#2db7f5">#2db7f5</sl-tag>
            <sl-tag color="#87d068">#87d068</sl-tag>
            <sl-tag color="#f1f1f1" fontColor="#71aad8">color: #f1f1f1, font: #71aad8</sl-tag>
            <sl-tag color="#f4f4f4" fontColor="#1394ff">color: #f4f4f4, font: #1394ff</sl-tag>
        </div>
    </template>`

export const CodeAddDynami =
`    <template>
        <div>
            <template v-for="(tag, index) in tags">
                <sl-tooltip v-if="tag.length > 20" :key="tag" :title="tag">
                    <sl-tag :key="tag" :closable="index !== 0" :afterClose="() => handleClose(tag)">
                        {{\`\${tag.slice(0, 20)}...\`}}
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
    </template>
    <script>
        export default {
            data() {
              return {
                tags: ['Unremovable', 'Tag 2', 'Tag 3'],
                inputVisible: false,
                inputValue: '',
              }
            },
            methods: {
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
            }
        }
    </script>`

/* 热门标签 */
export const CodeHot =
`    <template>
        <div>
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
    </template>
    <script>
        export default {
            data() {
              return {
                tags: ['Movies', 'Books', 'Music', 'Sports'],
                selectedTags: [],
              }
            },
            methods: {
              handleChange (tag, checked) {
                const { selectedTags } = this;
                const nextSelectedTags = checked
                  ? [...selectedTags, tag]
                  : selectedTags.filter(t => t !== tag);
                console.log('You are interested in: ', nextSelectedTags)
                this.selectedTags = nextSelectedTags
              },
            }
        }
    </script>`

/* 可选择标签 */
export const CodeChosen =
`    <template>
        <div>
            <sl-tag-group v-model="groups">
                <sl-checkable-tag key="1" slot="checkableTag">Tag1</sl-checkable-tag>
                <sl-checkable-tag key="2" slot="checkableTag">Tag2</sl-checkable-tag>
            </sl-tag-group>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                groups: ['1'],
              }
            }
        }
    </script>`

/* 可单选标签 */
export const CodeSingleChosen =
`    <template>
        <div>
            <sl-tag-group v-model="group" mode="radio">
                <sl-checkable-tag key="1" slot="checkableTag">Tag1</sl-checkable-tag>
                <sl-checkable-tag key="2" slot="checkableTag">Tag2</sl-checkable-tag>
            </sl-tag-group>
        </div>
    </template>
    <script>
        export default {
            data() {
              return {
                group: '1',
              }
            }
        }
    </script>`
