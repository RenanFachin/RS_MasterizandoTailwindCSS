'use client'
import { Input } from './components/Input'
import * as FileInput from './components/FileInput'

import { SettingTabs } from './components/SettingsTabs'

import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { SelectInput } from './components/SelectInput'
import { SelectItem } from './components/SelectInput/SelectItem'
import { Textarea } from './components/Textarea'
import { Button } from './components/Button'
import { useFileStatus } from './hooks/useFileStatus'

export default function Home() {
  const { handleChangeStatus } = useFileStatus()

  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            {/* Este botão do tipo submit vai fazer o envio do formulário, mas como ele não está dentro do form é necessário colocar um ID no form e uma form para o button */}
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          // Divide é uma propriedade de estilização específica do tailwindcss, boa para criar linhas separadoras
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          {/* Name */}
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Renan" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Fachin" />
              </Input.Root>
            </div>

            <div />
          </div>

          {/* Email */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="renan.fachin@hotmail.com"
              />
            </Input.Root>
          </div>

          {/* your photo - upload */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          {/* role */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Front-end Developer" />
            </Input.Root>
          </div>

          {/* country - select */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <SelectInput placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
            </SelectInput>
          </div>

          {/* Timezone - select */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>

            <SelectInput placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (PST) (UTC−08:00)"
              />

              <SelectItem value="utc3" text="America São Paulo (UTC−03:00)" />
            </SelectInput>
          </div>

          {/* bio - textarea + */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <SelectInput placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="markdown" />
                </SelectInput>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered className="h-4 w-4 text-zinc-500" />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>

          {/* portfolio - upload + */}
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="project"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              {/* multiple faz aceitar múltiplos envios */}
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>

            {/* Este botão do tipo submit vai fazer o envio do formulário, mas como ele não está dentro do form é necessário colocar um ID no form e uma form para o button */}
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>

            <Button
              type="button"
              form="settings"
              variant="ghost"
              onClick={() => handleChangeStatus()}
            >
              change progress status
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
