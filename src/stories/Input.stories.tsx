import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Form/Input/Input";
import { LockCloseIcon } from "../components/Icons";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Search",
    disabled: false,
  },
};

export const InputWithStartSlot: Story = {
  args: {
    placeholder: "password",
    startSlot: <LockCloseIcon width={20} height={20} />,
  },
};

export const InputWithEndSlot: Story = {
  args: {
    placeholder: "password",
    endSlot: <LockCloseIcon width={20} height={20} />,
  },
};
