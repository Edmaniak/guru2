<script setup lang="ts">
const title = 'Guru Design System'
const subtitle = 'Ayurveda & Yoga Inspired Components'

// Form state
const email = ref('')
const password = ref('')
const bio = ref('')
const selectedOption = ref('')
const agreeToTerms = ref(false)
const preferredTime = ref('')
const showModal = ref(false)

const selectOptions = [
  { value: 'vata', label: 'Vata Dosha' },
  { value: 'pitta', label: 'Pitta Dosha' },
  { value: 'kapha', label: 'Kapha Dosha' }
]

const timeOptions = [
  { value: 'morning', label: 'Morning Practice' },
  { value: 'evening', label: 'Evening Practice' },
  { value: 'both', label: 'Both' }
]

const handleSubmit = () => {
  // Form submitted
  showModal.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
    <!-- Header -->
    <GuruContainer gradient="lotus" padding="sm" max-width="full">
      <div class="text-center py-8">
        <h1 class="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-3 animate-fade-in">
          {{ title }}
        </h1>
        <p class="text-xl text-gray-600 animate-slide-up">{{ subtitle }}</p>
      </div>
    </GuruContainer>

    <!-- Main Content -->
    <GuruContainer max-width="xl" padding="lg">
      <!-- Buttons Section -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-display font-semibold text-gray-800 mb-6">Buttons</h2>
        <GuruCard variant="glass" padding="lg">
          <div class="space-y-6">
            <div>
              <h3 class="text-sm font-medium text-gray-600 mb-3">Variants</h3>
              <div class="flex flex-wrap gap-3">
                <GuruButton variant="primary">Primary</GuruButton>
                <GuruButton variant="secondary">Secondary</GuruButton>
                <GuruButton variant="accent">Accent</GuruButton>
                <GuruButton variant="outline">Outline</GuruButton>
                <GuruButton variant="ghost">Ghost</GuruButton>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-600 mb-3">Sizes</h3>
              <div class="flex flex-wrap items-center gap-3">
                <GuruButton size="sm">Small</GuruButton>
                <GuruButton size="md">Medium</GuruButton>
                <GuruButton size="lg">Large</GuruButton>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-600 mb-3">States</h3>
              <div class="flex flex-wrap gap-3">
                <GuruButton :loading="true">Loading</GuruButton>
                <GuruButton :disabled="true">Disabled</GuruButton>
                <GuruButton :full-width="true">Full Width</GuruButton>
              </div>
            </div>
          </div>
        </GuruCard>
      </section>

      <!-- Form Elements Section -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-display font-semibold text-gray-800 mb-6">Form Elements</h2>
        <GuruCard variant="gradient" padding="lg">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <GuruInput
              v-model="email"
              type="email"
              label="Email"
              placeholder="your@email.com"
              required
              helper-text="We'll never share your email"
            />

            <GuruInput
              v-model="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
            />

            <GuruSelect
              v-model="selectedOption"
              label="Your Dosha Type"
              placeholder="Select your dosha"
              :options="selectOptions"
              required
            />

            <GuruTextarea
              v-model="bio"
              label="About Your Practice"
              placeholder="Tell us about your yoga and ayurveda journey..."
              :rows="4"
              helper-text="Share your experience and goals"
            />

            <div class="space-y-3">
              <h3 class="text-sm font-medium text-gray-700">Preferred Practice Time</h3>
              <GuruRadio
                v-for="option in timeOptions"
                :key="option.value"
                v-model="preferredTime"
                :value="option.value"
                :label="option.label"
                name="practice-time"
              />
            </div>

            <GuruCheckbox
              v-model="agreeToTerms"
              label="I agree to the terms and conditions"
            />

            <div class="pt-4">
              <GuruButton
                type="submit"
                variant="primary"
                size="lg"
                :full-width="true">
                Submit Form
              </GuruButton>
            </div>
          </form>
        </GuruCard>
      </section>

      <!-- Cards Section -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-display font-semibold text-gray-800 mb-6">Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GuruCard variant="default" hoverable>
            <h3 class="text-xl font-display font-semibold text-gray-800 mb-2">Default Card</h3>
            <p class="text-gray-600">Clean and simple with a soft shadow effect.</p>
          </GuruCard>

          <GuruCard variant="gradient" hoverable>
            <h3 class="text-xl font-display font-semibold text-gray-800 mb-2">Gradient Card</h3>
            <p class="text-gray-600">Soft gradient background for a warm feel.</p>
          </GuruCard>

          <GuruCard variant="glass" hoverable>
            <h3 class="text-xl font-display font-semibold text-gray-800 mb-2">Glass Card</h3>
            <p class="text-gray-600">Frosted glass effect with backdrop blur.</p>
          </GuruCard>
        </div>
      </section>

      <!-- Badges Section -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-display font-semibold text-gray-800 mb-6">Badges</h2>
        <GuruCard variant="default" padding="lg">
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium text-gray-600 mb-3">Variants</h3>
              <div class="flex flex-wrap gap-2">
                <GuruBadge variant="primary">Primary</GuruBadge>
                <GuruBadge variant="secondary">Secondary</GuruBadge>
                <GuruBadge variant="accent">Accent</GuruBadge>
                <GuruBadge variant="success">Success</GuruBadge>
                <GuruBadge variant="warning">Warning</GuruBadge>
                <GuruBadge variant="info">Info</GuruBadge>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-600 mb-3">With Dots</h3>
              <div class="flex flex-wrap gap-2">
                <GuruBadge variant="primary" :dot="true">Active</GuruBadge>
                <GuruBadge variant="success" :dot="true">Completed</GuruBadge>
                <GuruBadge variant="warning" :dot="true">Pending</GuruBadge>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium text-gray-600 mb-3">Sizes</h3>
              <div class="flex flex-wrap items-center gap-2">
                <GuruBadge size="sm">Small</GuruBadge>
                <GuruBadge size="md">Medium</GuruBadge>
                <GuruBadge size="lg">Large</GuruBadge>
              </div>
            </div>
          </div>
        </GuruCard>
      </section>

      <!-- Modal Demo -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-display font-semibold text-gray-800 mb-6">Modal</h2>
        <GuruCard variant="elevated" padding="lg">
          <p class="text-gray-600 mb-4">Click the button to open a modal dialog</p>
          <GuruButton @click="showModal = true">
            Open Modal
          </GuruButton>
        </GuruCard>
      </section>

      <!-- Color Palette -->
      <section class="mb-16 animate-slide-up">
        <h2 class="text-3xl font-display font-semibold text-gray-800 mb-6">Color Palette</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GuruCard variant="default">
            <h3 class="text-lg font-display font-semibold mb-3">Primary (Terracotta)</h3>
            <div class="flex gap-2">
              <div class="w-12 h-12 rounded-lg bg-primary-300" />
              <div class="w-12 h-12 rounded-lg bg-primary-500" />
              <div class="w-12 h-12 rounded-lg bg-primary-700" />
            </div>
          </GuruCard>

          <GuruCard variant="default">
            <h3 class="text-lg font-display font-semibold mb-3">Secondary (Sage)</h3>
            <div class="flex gap-2">
              <div class="w-12 h-12 rounded-lg bg-secondary-300" />
              <div class="w-12 h-12 rounded-lg bg-secondary-500" />
              <div class="w-12 h-12 rounded-lg bg-secondary-700" />
            </div>
          </GuruCard>

          <GuruCard variant="default">
            <h3 class="text-lg font-display font-semibold mb-3">Accent (Coral)</h3>
            <div class="flex gap-2">
              <div class="w-12 h-12 rounded-lg bg-accent-300" />
              <div class="w-12 h-12 rounded-lg bg-accent-500" />
              <div class="w-12 h-12 rounded-lg bg-accent-700" />
            </div>
          </GuruCard>

          <GuruCard variant="default">
            <h3 class="text-lg font-display font-semibold mb-3">Earth</h3>
            <div class="flex gap-2">
              <div class="w-12 h-12 rounded-lg bg-earth-300" />
              <div class="w-12 h-12 rounded-lg bg-earth-500" />
              <div class="w-12 h-12 rounded-lg bg-earth-700" />
            </div>
          </GuruCard>

          <GuruCard variant="default">
            <h3 class="text-lg font-display font-semibold mb-3">Lotus (Pink)</h3>
            <div class="flex gap-2">
              <div class="w-12 h-12 rounded-lg bg-lotus-300" />
              <div class="w-12 h-12 rounded-lg bg-lotus-500" />
              <div class="w-12 h-12 rounded-lg bg-lotus-700" />
            </div>
          </GuruCard>

          <GuruCard variant="default">
            <h3 class="text-lg font-display font-semibold mb-3">Spiritual (Indigo)</h3>
            <div class="flex gap-2">
              <div class="w-12 h-12 rounded-lg bg-spiritual-300" />
              <div class="w-12 h-12 rounded-lg bg-spiritual-500" />
              <div class="w-12 h-12 rounded-lg bg-spiritual-700" />
            </div>
          </GuruCard>
        </div>
      </section>
    </GuruContainer>

    <!-- Modal -->
    <GuruModal v-model="showModal" title="Welcome!" size="md">
      <div class="space-y-4">
        <p class="text-gray-700">Thank you for exploring our Ayurveda and Yoga inspired design system!</p>
        <p class="text-gray-600">This modal features soft animations and a backdrop blur effect for a calming experience.</p>
        <GuruBadge variant="success" :dot="true">Form Submitted Successfully</GuruBadge>
      </div>
      <template #footer>
        <div class="flex justify-end gap-3">
          <GuruButton variant="outline" @click="showModal = false">
            Close
          </GuruButton>
          <GuruButton variant="primary" @click="showModal = false">
            Got it!
          </GuruButton>
        </div>
      </template>
    </GuruModal>
  </div>
</template>


