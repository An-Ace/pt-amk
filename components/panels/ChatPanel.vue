<template>
	<!-- Change Width -->
	<section id="chat-panel" class="page page-wrapped flex flex-col bg-white rounded-2xl">
		<PageSplitted>
			<template #sidebar-header="{ handleClose }">
				<n-dropdown trigger="click" show-arrow
					:options="[
						{ label: 'Open', key: 'Open', props: { class: 'font-semibold' } },
						{ label: 'Close', key: 'Close', props: { class: 'font-semibold' } },
					]"
				>
					<div class="text-lg font-bold flex gap-2 items-center">
						<span>Open</span>
						<span class="text-gray-500"> 8</span>
						<svg class="size-4" viewBox="0 0 16 16" stroke="black" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z" fill="currentColor"></path>
						</svg>
					</div> 
				</n-dropdown>
				<div class="flex gap-2">
					<n-dropdown trigger="click"
						:options="[
							{ label: 'Open', key: 'Open', props: { class: 'font-semibold' } },
							{ label: 'Close', key: 'Close', props: { class: 'font-semibold' } },
						]"
					>
						<n-button strong secondary type="info" size="large" class="px-3 rounded-xl">
							<Icon name="f7:sort-up" :size="24"/>
						</n-button>
					</n-dropdown>
					<n-button strong secondary type="default" size="large" class="px-3 rounded-xl back-btn" @click="handleClose?.()">
						<Icon name="ion:arrow-back" :size="24"/>
					</n-button>
				</div>
			</template>
			<template #sidebar-content="{ handleClose }">
				<ChatList v-for="(chatList, i) in store.chats"
					:new-message="chatList.newMesseges"
					:is-pinned="chatList.isPinned"
					@click="handleClose?.(); store.setActiveChat(i); store.setReaded()"
					:selected="store.activeChat?.id === chatList.id"
					:last-date="chatList.lastDate"
					:last-message="chatList.lastMessage"
					:name="chatList.contact.name"
					:number="chatList.contact.number"
					:role="chatList.contact.role"
				/>
			</template>
			<template #main-toolbar="{ toggleMenubar }">
				<div>
					<div class="font-bold text-primary text-base">{{ store.activeChat?.contact.name }}</div>
					<div class="font-bold text-gray-600 text-sm" :class="{ '!text-base': !store.activeChat?.contact.name }">{{ store.activeChat?.contact.number }}</div>
				</div>
				<div class="flex gap-3" v-if="store.activeChat?.conversations?.length">
					<n-dropdown trigger="click" show-arrow
						:options="[
							{ label: 'Unassigned', key: 'unassigned', props: { class: 'font-semibold' } },
							{ label: 'Assigned', key: 'assigned', props: { class: 'font-semibold' } }]"
						:scrollable="true"
						:value="store.activeChat?.isAssigned ? 'assigned' : 'unassigned'"
						@select="store.setAssigned($event === 'assigned')"
						>
						<div class="flex items-center gap-2 cursor-pointer">
							<div class="u-avatar flex items-center" :class="{ 'u-online': true }">
								<n-avatar round size="medium" :src="store.activeChat?.contact.avatar" />
							</div>
							<span class="font-bold text-base">{{ store.activeChat?.isAssigned ? 'Assigned' : 'Unassigned' }}</span>
							<svg class="size-4" viewBox="0 0 16 16" stroke="black" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z" fill="currentColor"></path>
							</svg>
						</div>
					</n-dropdown>
					<n-button strong secondary size="large" class="px-3 rounded-xl bg-sky-100/50">
						<Icon name="ion:search" :size="24"/>
					</n-button>
					<n-button @click="store.setPinned()" strong secondary size="large" class="px-3 rounded-xl bg-sky-100/50" :type="store.activeChat?.isPinned ? 'primary' : 'default'">
						<Icon name="bi:pin" :size="24" class="stroke-[.5px] stroke-[#333639]" :class="{'stroke-primary': store.activeChat?.isPinned}"/>
					</n-button>
					<n-button @click="toggleMenubar()" strong secondary size="large" class="px-3 rounded-xl bg-sky-100/50">
						<Icon name="mingcute:more-2-fill" :size="24"/>
					</n-button>
				</div>
			</template>
			<template #main-content>
				<div class="chat-view grow">
					<n-scrollbar style="max-height: 100%" ref="chatViewList">
						<div
							v-if="store.activeChat?.conversations?.length"
							v-for="(conversation, i) of store.activeChat?.conversations"
							:key="conversation.id"
							class="conversation item-appear item-appear-bottom item-appear-010 flex"
							:class="{ mine: conversation.isMe, '!pb-0': store.activeChat?.conversations?.[i+1]?.isMe === conversation.isMe, '!pt-0': store.activeChat?.conversations?.[i+1]?.isMe === conversation.isMe }"
						>
							<div class="avatar" v-if="!conversation.isMe">
								<n-avatar round size="large" :src="conversation.by.avatar" />
							</div>
							<div class="messages-group flex flex-col">
								<div class="message" v-for="message, i of conversation.messages" :key="message.text" :style="{ 'margin-bottom': conversation.isMe ? '3px' : undefined }">
									<div v-if="message.fileURL" class="p-2 mb-2 rounded bg-zinc-100 text-gray-700">
										<div class="flex flex-wrap items-center gap-2 attached-file">
											<div class="flex items-center justify-center w-12 h-12 rounded">
												<Icon name="bx:file" :size="24" />
											</div>
											<div class="overflow-hidden flex-grow-1">
												<div class="text-start">
													<h5 class="mb-1 truncate text-14 font-semibold">{{ message.fileURL.split('/').at(-1) }}</h5>
													<p class="mb-0 text-gray-500 truncate text-13">12.5 MB</p>
												</div>
											</div>
											<div class="rtl:mr-4 ltr:ml-4">
												<div class="flex items-start gap-2">
													<div>
														<a :download="message.fileURL.split('/').at(-1)" :href="message.fileURL" class="font-medium ">
															<Icon name="tabler:download" :size="24" />
														</a>
													</div>
													<div class="relative self-start order-1 dropstart">
														<a class="p-0 text-gray-400 border-0 btn dropdown-toggle dark:text-gray-300" href="#" role="button" data-bs-toggle="dropdown" id="dropdownMenuButton20">
															<i class="text-lg text-gray-500 ri-more-2-fill dark:text-gray-300"></i>
														</a>
														<div class="absolute left-0 right-auto z-50 py-2 my-6 text-left list-none bg-white border-none rounded shadow-lg lg:ltr:right-0 lg:ltr:left-auto rtl:left-0 rtl:right-auto dropdown-menu w-36 bg-clip-padding dark:bg-zinc-700 hidden" aria-labelledby="dropdownMenuButton20" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-121.6px, 388px, 0px);" data-popper-placement="left-start">

															<a class="block w-full px-4 py-2 text-sm font-normal bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Forward <i class="text-gray-500 rtl:float-left ltr:float-right ri-chat-forward-line"></i></a>
															<a class="block w-full px-4 py-2 text-sm font-normal bg-transparent dropdown-item whitespace-nowrap hover:bg-gray-100/50 dark:text-gray-100 dark:hover:bg-zinc-600 ltr:text-left rtl:text-right" href="#">Delete <i class="text-gray-500 rtl:float-left ltr:float-right ri-delete-bin-line"></i></a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="font-semibold whitespace-pre-wrap">{{ message.text }}</div>
									<div class="date flex justify-end items-center font-semibold gap-2" :class="{ 'opacity-70': !conversation.isMe }">
										<n-time :time="new Date(message.date)" format="dd-MM-yy | HH:mm" />
										<span v-if="conversation.isMe" class="text-white items-center flex" >
											<!-- 
												Pending: ci:clock
												Queue: ci:check
												Sent: ci:check-all
												Readed: mdi:read
											-->
											<Icon name="mdi:read" :size="16" color="white"/>
										</span>
									</div>
								</div>
								<div v-if="conversation.isMe" class="text-sm font-semibold">Yaya Jujura</div>
							</div>
						</div>
						<n-empty v-else size="huge" description="Pilih Chat Di Menu Kiri.">
							<template #icon>
								<Icon name="line-md:chat"/>
							</template>
						</n-empty>
					</n-scrollbar>
				</div>
			</template>

			<template #main-footer>
				<div>
					<div class="font-bold text-base">
						<div class="flex justify-center mb-1">
							<span class="text-green-500">___Status percakapan Open &nbsp;</span><span>, Tipe Percakapan</span> <a href="#chat-panel"><span class="text-primary">&nbsp;Flow Up Lead Ke 1</span></a>
						</div>
						<div>
							<span>Sales aktif : </span> <span class="text-green-500"> Yaya Jujura </span>
							<n-dropdown trigger="click" show-arrow
								:options="[
									{ label: 'Yaya Jujura', key: 'Yaya Jujura', props: { class: 'font-semibold' } },
									{ label: 'Test User', key: 'Test User', props: { class: 'font-semibold' } },
								]"
							>
								<span class="text-primary cursor-pointer">Ganti sales aktif</span>
							</n-dropdown>
							<!-- <a href="#chat-panel"><span class="text-primary">Ganti sales aktif</span></a> -->
						</div>
					</div>
				</div>
				<div class="message-editor flex w-full border-2 px-1.5 py-1.5 rounded-xl items-center">
					<n-button :bordered="false" class="p-3">
						<Icon name="heroicons:paper-clip-solid" color="#6D5DD3" :size="20" />
					</n-button>
					<div class="text-input grow">
						<n-mention
							:bordered="false"
							style="--n-padding-left: 0px; --n-padding-top: 0px; --n-padding-bottom: 0px; --n-border-radius: 0px;"
							placeholder="Message..."
							type="textarea"
							size="small"
							class="font-semibold"
							:autosize="{
								minRows: 1,
								maxRows: 5
							}"
							v-model:value="messege"
							:options="store.chats.map(chat => ({ label: chat.contact.name || chat.contact.number, value: chat.contact.number, avatar: chat.contact.avatar }))"
						/>
					</div>
					<div class="actions-group flex items-center">
						<n-button :bordered="false">
							<Icon name="fa-regular:smile" color="#FDC748" :size="20" />
						</n-button>
						<n-button type="primary" class="rounded-xl" @click="messege && store.addMessage(messege); messege = ''">
							<Icon name="iconamoon:send" :size="20" />
						</n-button>
					</div>
				</div>
			</template>
			<template #menubar-header="{ handleClose }">
				<div v-if="menu === 'edit'" class="flex justify-center w-full text-lg font-extrabold">Edit Data</div>
				<div v-if="menu === 'details'" class="flex justify-center w-full text-lg font-extrabold">Detail</div>
			</template>
			<template #menubar-content>
				<div class="grid justify-center gap-4 border-gray-300 py-6" style="border-bottom-width: .5px;">
					<div class="flex justify-center">
						<n-avatar
							round
							:size="70"
							:src="store.activeChat?.contact.avatar"
						/>
					</div>
					<div class="font-bold flex justify-center">{{ store.activeChat?.contact.name || store.activeChat?.contact.number }}</div>
					<div class="flex gap-4">
						<n-button @click="menu = 'edit'" ghost :type="menu === 'edit' ? 'primary' : 'default'" class="rounded-xl py-5">
							<Icon name="uil:edit" :size="20" />
						</n-button>
						<n-button @click="menu = 'details'" ghost :type="menu === 'details' ? 'primary' : 'default'" class="rounded-xl py-5">
							<Icon name="ic:round-menu" :size="20" />
						</n-button>
						<n-button ghost type="default" class="rounded-xl py-5">
							<Icon name="carbon:overflow-menu-vertical" :size="20" />
						</n-button>
					</div>
				</div>
				<ContactEdit v-if="menu === 'edit'" :name="store.activeChat?.contact.name || ''" :change-name="store.changeName"/>
				<div v-if="menu === 'details'">Detail</div>
			</template>
		</PageSplitted>
	</section>
</template>

<script setup lang="ts">
import PageSplitted from "@/components/PageSplitted.vue"
import { NDropdown, NButton, NAvatar, NScrollbar, NTime, NMention, NEmpty } from "naive-ui";
// import { useHideLayoutFooter } from "@/composables/useHideLayoutFooter"

// :has() CSS relational pseudo-class not yet supported by Firefox
// (https://caniuse.com/css-has)
// at the moment this worker around permit to hide Layout Footer
// useHideLayoutFooter()

// defineProps<{
// 	handleClose?: () => void;
// }>()
const store = computed(() => useChatStore())
const menu = ref<'edit' | 'details'>('edit')
const messege = ref('')
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin.scss";
.page {
	@media (max-width: 700px) {
		@include page-full-view;
	}
	@media (min-width: 700px) {
		.back-btn {
			display: none;
		}
	}

	.spacer {
		background: var(--divider-005-color);
		background: repeating-linear-gradient(
			-45deg,
			var(--divider-005-color),
			var(--divider-005-color) 1px,
			transparent 1px,
			transparent 20px
		);
		width: 100%;
		height: 200vh;
		border-radius: 14px;
		border: 4px dashed var(--divider-005-color);
		opacity: 0.5;
	}

	.u-avatar {
		border-radius: 50%;
		border: 2px solid var(--divider-020-color);
		position: relative;

		&::after {
			content: "";
			width: 12px;
			height: 12px;
			display: block;
			position: absolute;
			right: 0;
			bottom: 0;
			background-color: #b8b8b8;
			border: 2px solid var(--divider-020-color);
			border-radius: 50%;
		}
		&.u-online {
			&::after {
				background-color: var(--primary-color);
			}
		}
	}

	.chat-view {
		overflow: hidden;

		.conversation {
			padding: 20px 30px;
			gap: 14px;

			.messages-group {
				width: fit-content;
				max-width: 60%;

				.message {
					background-color: var(--bg-secondary-color);
					margin-bottom: 5px;
					padding: 5px 10px;
					border-radius: var(--border-radius);
					width: fit-content;
					font-size: 14px;

					.date {
						// opacity: 0.8;
						font-size: 12px;
						padding: 0 3px;
					}
				}
			}

			&.mine {
				flex-direction: row-reverse;

				.messages-group {
					align-items: end;

					.message {
						background-color: var(--primary-color);
						color: var(--bg-color);
					}
				}
			}
		}

		@container (max-width: 500px) {
			.conversation {
				padding: 10px 0px;
				.messages-group {
					max-width: 90%;
				}
			}
		}
	}

	.message-editor {
		// border-block-start: var(--border-small-050);
		// padding: 20px 30px;
		// gap: 20px;

		.text-input {
			.n-input--textarea {
				background-color: transparent;

				:deep() {
					.n-input__border,
					.n-input__state-border {
						display: none;
					}
				}
			}
		}

		.actions-group {
			gap: 4px;
		}
	}
}
.page-wrapped {
	height: calc(100svh - 20px);
}
</style>
